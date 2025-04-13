import { z } from "zod"

export const CardFormSchema = z.object({
  cardholderName: z
    .string({ required_error: "Can't be blank" })
    .min(1, "Can't be blank"),

  cardNumber: z
    .string({ required_error: "Can't be blank" })
    .min(1, "Can't be blank")
    .regex(/^-?\d+$/, "Wrong format, numbers only")
    .refine((value) => Number(value) >= 0, {
      message: "Non-negative numbers only",
    }),

  cvc: z
    .string({ required_error: "Can't be blank" })
    .min(1, "Can't be blank")
    .regex(/^-?\d+$/, "Wrong format, numbers only")
    .refine((value) => Number(value) >= 0, {
      message: "Non-negative numbers only",
    }),

  expirationDate: z.object(
    {
      month: z
        .number({
          required_error: "Can't be blank",
          invalid_type_error: "Wrong format, numbers only",
        })
        .nonnegative("Non-negative numbers only"),
      year: z
        .number({
          required_error: "Can't be blank",
          invalid_type_error: "Wrong format, numbers only",
        })
        .nonnegative("Non-negative numbers only"),
    },
    { required_error: "Can't be blank" }
  ),
})

export type CardFormType = z.infer<typeof CardFormSchema>
