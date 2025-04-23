"use client"

import { useState, useEffect } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils"
import { addCard } from "@/actions/actions"
import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"
import type { CardValuesType } from "@/lib/types"

import TextField from "@/components/ui/TextField"
import FieldError from "@/components/ui/FieldError"
import RACDateField from "@/components/ui/RACDateField"
import SubmitButton from "@/components/SubmitButton"
import WarningMessage from "@/components/ui/WarningMessage"

export type SubmitButtonStatus = "idle" | "loading"

export default function CardDetailsForm({
  onSuccess,
  onUpdate,
  className,
}: {
  onSuccess: () => void
  onUpdate: (newValues: CardValuesType) => void
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

  const newFormValues = useWatch({ control })

  useEffect(() => {
    onUpdate(newFormValues)
  }, [newFormValues, onUpdate])

  return (
    <form
      noValidate
      className={cn("grid w-full max-w-sm gap-7", className)}
      onSubmit={handleSubmit(async (data) => {
        setStatus("loading")

        const serverResponse = await addCard(data)

        if (serverResponse) {
          setError("root", serverResponse)
          setStatus("idle")
        } else {
          onSuccess()
        }
      })}
    >
      <div className="grid gap-8">
        <WarningMessage />

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
            inputMode="numeric"
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
              inputMode="numeric"
            />
          </div>
          {errors.root?.message && (
            <FieldError>{errors.root.message}</FieldError>
          )}
        </div>
      </div>

      <SubmitButton status={status} />
    </form>
  )
}
