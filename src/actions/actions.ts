"use server"

import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"
import prisma from "@/lib/prisma"

export async function addCard(cardData: CardFormType) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const validatedData = CardFormSchema.safeParse(cardData)
  if (!validatedData.success) {
    return {
      type: "server_error",
      message: "Server error. Unable to add card. Please try again.",
    }
  }

  try {
    const doCardExist =
      (await prisma.cardDetails.count({
        where: { cardNumber: cardData.cardNumber },
      })) > 0

    if (doCardExist) {
      return {
        type: "server_error",
        message:
          "This card number has already been added. Please add a different card.",
      }
    }

    await prisma.cardDetails.create({
      data: {
        cardholderName: cardData.cardholderName,
        cardNumber: cardData.cardNumber,
        expirationMonth: cardData.expirationDate.month,
        expirationYear: cardData.expirationDate.year,
        cvc: cardData.cvc,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error({
        message: error.message,
        stack: error.stack,
        // @ts-expect-error: digest may exist on some Next.js error objects
        digest: error.digest,
      })
    } else {
      console.error("Unknown error:", error)
    }

    return {
      type: "server_error",
      message: "Some error",
    }
  }
}
