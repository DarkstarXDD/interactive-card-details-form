"use client"

import { cn } from "@/lib/utils"
import RACTextField from "@/components/ui/RACTextField"
import RACNumberField from "@/components/ui/RACNumberField"
import RACDateField from "@/components/ui/RACDateField"
import Button from "@/components/ui/Button"

import { UserFormSchema, type UserFormType } from "@/lib/schemas/userFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"

export default function CardDetailsForm({
  onSubmit,
  className,
}: {
  onSubmit: () => void
  className?: string
}) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserFormType>({
    resolver: zodResolver(UserFormSchema),
  })

  return (
    <form
      noValidate
      className={cn("grid w-full max-w-sm gap-7", className)}
      onSubmit={handleSubmit(
        (data) => {
          console.log(data)
          onSubmit()
        },
        (errors) => console.log(errors)
      )}
    >
      <div className="grid gap-5">
        <Controller
          name="cardholderName"
          control={control}
          render={({
            field: { name, onChange, onBlur, ref },
            fieldState: { invalid },
          }) => {
            return (
              <RACTextField
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
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
          render={({
            field: { name, onChange, onBlur, ref },
            fieldState: { invalid },
          }) => {
            return (
              <RACNumberField
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
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

          <Controller
            name="cvc"
            control={control}
            render={({
              field: { name, onChange, onBlur, ref },
              fieldState: { invalid },
            }) => {
              return (
                <RACNumberField
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
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
