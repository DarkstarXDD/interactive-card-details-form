import { z } from "zod"

export const UserFormSchema = z.object({
  cardholderName: z.string().min(1, "Can't be blank"),
  cardNumber: z
    .number({
      required_error: "Can't be blank",
      invalid_type_error: "Wrong format, numbers only",
    })
    .nonnegative("Non-negative number only"),
  cvc: z
    .number({ message: "Wrong format, number only" })
    .nonnegative("Non-negative number only"),
})

export type UserFormType = z.infer<typeof UserFormSchema>
