import { z } from "zod"

export const UserFormSchema = z.object({
  cardholderName: z
    .string({ required_error: "Can't be blank" })
    .min(1, "Can't be blank"),
  cardNumber: z
    .number({
      required_error: "Can't be blank",
      invalid_type_error: "Wrong format, numbers only",
    })
    .nonnegative("Non-negative numbers only"),
  cvc: z
    .number({ message: "Wrong format, numbers only" })
    .nonnegative("Non-negative numbers only"),
})

export type UserFormType = z.infer<typeof UserFormSchema>
