"use client"

import { cn } from "@/lib/utils"
import TextField from "@/components/ui/TextField"
import Button from "@/components/ui/Button"
import RACTextField from "@/components/ui/RACTextField"
import { useForm } from "react-hook-form"
import { UserFormSchema, type UserFormType } from "@/lib/schemas/userFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function CardDetailsForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({ resolver: zodResolver(UserFormSchema) })

  return (
    <form
      className={cn("grid w-full max-w-sm gap-7", className)}
      onSubmit={handleSubmit((data) => console.log(data))}
      noValidate
    >
      <div className="grid gap-5">
        <TextField
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          {...register("cardholderName")}
          errorMessage={errors.cardholderName?.message}
        />

        <RACTextField
          label="Cardholder Name"
          type="text"
          placeholder="e.g. Jane Appleseed"
          errorMessage={errors.cardholderName?.message}
        />

        <TextField
          label="Card Number"
          min={0}
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber", { valueAsNumber: true })}
          errorMessage={errors.cardNumber?.message}
        />

        <div className="flex items-start gap-5">
          <div className="flex flex-3/5 shrink-0 items-start gap-2">
            <TextField label="Exp. Date" placeholder="MM" />
            <TextField label="(MM / YY)" placeholder="YY" />
          </div>

          <TextField
            label="CVC"
            min={0}
            maxLength={4}
            placeholder="e.g. 123"
            {...register("cvc", { valueAsNumber: true })}
            errorMessage={errors.cvc?.message}
          />
        </div>
      </div>

      <Button>Confirm</Button>
    </form>
  )
}
