"use client"

import { cn } from "@/lib/utils"
import RACLabel from "@/components/ui/RACLabel"
import RACFieldError from "@/components/ui/RACFieldError"
import { DateField, DateInput, DateSegment } from "react-aria-components"
import type { DateValue, DateFieldProps } from "react-aria-components"

interface RACDateField<T extends DateValue>
  extends Omit<DateFieldProps<T>, "onChange"> {
  label: string
  ref: React.Ref<HTMLDivElement>
  errorMessage?: string
  onChange?: (value: {
    month: number | undefined
    year: number | undefined
  }) => void
}

export default function RACDateField<T extends DateValue>({
  label,
  ref,
  errorMessage,
  className,
  onChange,
  ...props
}: RACDateField<T>) {
  return (
    <DateField
      {...props}
      granularity={"month" as unknown as "day"}
      className={cn("grid gap-2", className)}
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
