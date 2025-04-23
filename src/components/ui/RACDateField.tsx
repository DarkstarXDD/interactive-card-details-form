"use client"

import { DateField, DateInput, DateSegment } from "react-aria-components"
import { useController, type UseControllerProps } from "react-hook-form"

import { cn } from "@/lib/utils"
import type { CardFormType } from "@/lib/schemas/cardFormSchema"

import RACLabel from "@/components/ui/RACLabel"
import RACFieldError from "@/components/ui/RACFieldError"

type RACDateFieldProps = UseControllerProps<CardFormType> & {
  label: string
  errorMessage?: string
  className?: string
}

export default function RACDateField({
  label,
  name,
  control,
  errorMessage,
  className,
}: RACDateFieldProps) {
  const {
    field: { name: fieldName, onChange, onBlur, ref },
    fieldState: { invalid },
  } = useController({ name, control })

  return (
    <DateField
      className={cn("grid gap-2", className)}
      name={fieldName}
      onBlur={onBlur}
      isInvalid={invalid}
      granularity={"month" as unknown as "day"}
      onChange={(date) => {
        const expDate = {
          month: date?.month,
          year: date?.year,
        }
        onChange?.(expDate)
      }}
    >
      <RACLabel>{label}</RACLabel>
      <DateInput className="flex gap-2" ref={ref}>
        {(segment) => (
          <DateSegment
            className="border-border ring-ring text-foreground aria-[invalid]:border-error aria-[invalid]:ring-error data-[placeholder]:text-primary-foreground-muted w-20 min-w-0 rounded-lg border px-4 py-2 text-base outline-none focus-visible:ring-2 data-[placeholder]:uppercase data-[type='literal']:hidden"
            segment={segment}
          />
        )}
      </DateInput>

      <RACFieldError>{errorMessage}</RACFieldError>
    </DateField>
  )
}
