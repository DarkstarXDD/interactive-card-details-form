"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import TextField from "@/components/ui/TextField"
import FieldError from "@/components/ui/FieldError"
import RACDateField from "@/components/ui/RACDateField"
import LoadingCircleSpinner from "@/components/LoadingCircleSpinner"
import Button from "@/components/ui/Button"

import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { addCard } from "@/actions/actions"

export default function CardDetailsForm({
  onSuccess,
  className,
}: {
  onSuccess: () => void
  className?: string
}) {
  const [status, setStatus] = useState<"idle" | "loading">("idle")
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
          <Controller
            name="expirationDate"
            control={control}
            render={({
              field: { name, onChange, onBlur, ref },
              fieldState: { invalid },
            }) => {
              return (
                <RACDateField
                  className="flex-3/5"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  label="Exp. Date (MM/YY)"
                  errorMessage={errors.expirationDate?.month?.message}
                  isInvalid={invalid}
                />
              )
            }}
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

      <Button disabled={status === "loading"}>
        {status === "loading" ? (
          <div className="flex items-center justify-center gap-3">
            <span>Submitting</span>
            <LoadingCircleSpinner />
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
}
