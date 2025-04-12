"use client"

import { cn } from "@/lib/utils"
import RACLabel from "@/components/ui/RACLabel"
import RACInput from "@/components/ui/RACInput"
import RACFieldError from "@/components/ui/RACFieldError"
import { type NumberFieldProps, NumberField } from "react-aria-components"

type RACNumberFieldProps = NumberFieldProps & {
  label: string
  placeholder?: string
  ref?: React.Ref<HTMLInputElement>
  errorMessage?: string
}

export default function RACNumberField({
  label,
  errorMessage,
  placeholder,
  ref,
  className,
  ...props
}: RACNumberFieldProps) {
  return (
    <NumberField
      {...props}
      className={cn("grid gap-2", className)}
      formatOptions={{ useGrouping: false }}
    >
      <RACLabel>{label}</RACLabel>
      <RACInput ref={ref} placeholder={placeholder} inputMode="numeric" />
      <RACFieldError>{errorMessage}</RACFieldError>
    </NumberField>
  )
}
