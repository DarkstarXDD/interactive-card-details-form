"use server"

import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"
import prisma from "@/lib/prisma"

export async function addCard(data: CardFormType) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const validatedData = CardFormSchema.safeParse(data)
  if (!validatedData.success) {
    return {
      type: "server_error",
      message: "Server error. Unable to add card. Please try again.",
    }
  }

  await prisma.cardDetails.create({
    data: {
      cardholderName: data.cardholderName,
      cardNumber: data.cardNumber,
      expirationMonth: data.expirationDate.month,
      expirationYear: data.expirationDate.year,
      cvc: data.cvc,
    },
  })
}
