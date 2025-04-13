"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import TextField from "@/components/ui/TextField"
import FieldError from "@/components/ui/FieldError"
import RACDateField from "@/components/ui/RACDateField"
import SubmitButton from "@/components/SubmitButton"

import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addCard } from "@/actions/actions"

export type SubmitButtonStatus = "idle" | "loading"

export default function CardDetailsForm({
  onSuccess,
  className,
}: {
  onSuccess: () => void
  className?: string
}) {
  const [status, setStatus] = useState<SubmitButtonStatus>("idle")

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    setError,
  } = useForm<CardFormType>({
    resolver: zodResolver(CardFormSchema),
  })

  return (
    <form
      noValidate
      className={cn("grid w-full max-w-sm gap-7", className)}
      onSubmit={handleSubmit(
        async (data) => {
          setStatus("loading")

          const serverResponse = await addCard(data)

          if (serverResponse) {
            setError("root", serverResponse)
          } else {
            onSuccess()
          }
        },
        (errors) => console.log(errors)
      )}
    >
      <div className="grid gap-5">
        <TextField
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          {...register("cardholderName")}
          errorMessage={errors.cardholderName?.message}
        />

        <TextField
          label="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber")}
          errorMessage={errors.cardNumber?.message}
        />

        <div className="flex items-start gap-5">
          <RACDateField
            label="Exp. Date (MM/YY)"
            name="expirationDate"
            control={control}
            errorMessage={
              errors.expirationDate?.message ||
              errors.expirationDate?.month?.message
            }
          />

          <TextField
            label="CVC"
            placeholder="e.g. 123"
            {...register("cvc")}
            errorMessage={errors.cvc?.message}
          />
        </div>
        {errors.root?.message && <FieldError>{errors.root.message}</FieldError>}
      </div>

      <SubmitButton status={status} />
    </form>
  )
}
