"use server"

import { UserFormSchema, UserFormType } from "@/lib/schemas/userFormSchema"

export async function addCard(data: UserFormType) {
  console.log(data)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const validatedData = UserFormSchema.safeParse(data)
  if (!validatedData.success) {
    return {
      type: "server_error",
      message: "Server error. Unable to add card. Please try again.",
    }
  }
}
