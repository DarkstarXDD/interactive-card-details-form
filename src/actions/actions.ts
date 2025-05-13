"use server"

import { Prisma } from "@prisma/client"

import prisma from "@/lib/prisma"
import { CardFormSchema } from "@/lib/schemas/cardFormSchema"

import type { CardFormType } from "@/lib/schemas/cardFormSchema"

export async function addCard(cardData: CardFormType) {
  const validationResult = CardFormSchema.safeParse(cardData)
  if (!validationResult.success) {
    return {
      type: "server_error",
      message: "Server validation error. Unable to add card. Please try again.",
    }
  }

  try {
    await prisma.cardDetails.create({
      data: {
        cardholderName: cardData.cardholderName,
        cardNumber: cardData.cardNumber,
        expirationMonth: cardData.expirationDate.month,
        expirationYear: cardData.expirationDate.year,
        cvc: cardData.cvc,
      },
    })
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      return {
        type: "server_error",
        message:
          "This card number has already been added. Please add a different card.",
      }
    }
    console.error(e)
    return {
      type: "server_error",
      message: "Server error. Unable to add card. Please try again.",
    }
  }
}
