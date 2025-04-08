"use client"

import Label from "@/components/ui/Label"
import Input from "@/components/ui/Input"
import FieldError from "@/components/ui/FieldError"
import { ComponentProps, useId } from "react"

export default function TextField({
  label,
  id,
  errorMessage,
  ...props
}: Omit<ComponentProps<"input">, "type"> & {
  label: string
  type?: "text" | "email" | "password" | "number" | "tel"
  errorMessage?: string
}) {
  const defaultId = useId()
  const inputId = id ?? defaultId

  const errorId = `${inputId}-error`
  const isInvalid = errorMessage ? true : false

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId}>{label}</Label>
      <Input
        id={inputId}
        {...props}
        aria-invalid={isInvalid || undefined}
        aria-describedby={isInvalid ? errorId : undefined}
      />
      {isInvalid && <FieldError id={errorId}>{errorMessage}</FieldError>}
    </div>
  )
}
