"use client"

import { cn } from "@/lib/utils"
import RACTextField from "@/components/ui/RACTextField"
import RACNumberField from "@/components/ui/RACNumberField"
import TextField from "@/components/ui/TextField"
import Button from "@/components/ui/Button"

import { UserFormSchema, type UserFormType } from "@/lib/schemas/userFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

export default function CardDetailsForm({ className }: { className?: string }) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserFormType>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      cardholderName: "",
      // cardNumber: 0,
      // cvc: 0,
    },
  })

  return (
    <form
      className={cn("grid w-full max-w-sm gap-7", className)}
      onSubmit={handleSubmit(
        (data) => console.log(data),
        (errors) => console.log(errors)
      )}
      noValidate
    >
      <div className="grid gap-5">
        <Controller
          name="cardholderName"
          control={control}
          render={({ field, fieldState: { invalid } }) => {
            return (
              <RACTextField
                {...field}
                label="Cardholder Name"
                type="text"
                placeholder="e.g. Jane Appleseed"
                errorMessage={errors.cardholderName?.message}
                isInvalid={invalid}
              />
            )
          }}
        />

        <Controller
          name="cardNumber"
          control={control}
          render={({ field, fieldState: { invalid } }) => {
            return (
              <RACNumberField
                {...field}
                label="Card Number"
                placeholder="e.g. 1234 5678 9123 0000"
                minValue={0}
                errorMessage={errors.cardNumber?.message}
                isInvalid={invalid}
              />
            )
          }}
        />

        <div className="flex items-start gap-5">
          <div className="flex flex-3/5 shrink-0 items-start gap-2">
            <TextField label="Exp. Date" placeholder="MM" />
            <TextField label="(MM / YY)" placeholder="YY" />
          </div>

          <Controller
            name="cvc"
            control={control}
            render={({ field, fieldState: { invalid } }) => {
              return (
                <RACNumberField
                  {...field}
                  label="CVC"
                  placeholder="e.g. 123"
                  minValue={0}
                  errorMessage={errors.cvc?.message}
                  isInvalid={invalid}
                />
              )
            }}
          />
        </div>
      </div>

      <Button>Confirm</Button>
    </form>
  )
}
