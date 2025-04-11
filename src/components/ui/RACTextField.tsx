"use client"

import { cn } from "@/lib/utils"
import RACLabel from "@/components/ui/RACLabel"
import RACInput from "@/components/ui/RACInput"
import RACFieldError from "@/components/ui/RACFieldError"
import { type TextFieldProps, TextField } from "react-aria-components"

type RACTextFieldProps = TextFieldProps & {
  label: string
  placeholder?: string
  ref?: React.Ref<HTMLInputElement>
  errorMessage?: string
}

export default function RACTextField({
  label,
  errorMessage,
  placeholder,
  ref,
  className,
  ...props
}: RACTextFieldProps) {
  return (
    <TextField {...props} className={cn("grid gap-2", className)}>
      <RACLabel>{label}</RACLabel>
      <RACInput ref={ref} placeholder={placeholder} />
      <RACFieldError>{errorMessage}</RACFieldError>
    </TextField>
  )
}
