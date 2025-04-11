"use client"

import { cn } from "@/lib/utils"
import RACLabel from "@/components/ui/RACLabel"
import RACFieldError from "@/components/ui/RACFieldError"
import { DateField, DateInput, DateSegment } from "react-aria-components"
import type { DateFieldProps, DateValue } from "react-aria-components"

interface RACDateField<T extends DateValue> extends DateFieldProps<T> {
  label: string
  errorMessage?: string
}

export default function RACDateField<T extends DateValue>({
  label,
  errorMessage,
  className,
  ...props
}: RACDateField<T>) {
  return (
    <DateField {...props} className={cn("grid gap-2", className)}>
      <RACLabel>{label}</RACLabel>
      <DateInput className="flex gap-2">
        {(segment) => (
          <>
            {segment.type !== "day" && (
              <DateSegment
                className="border-border ring-ring text-foreground aria-[invalid]:border-error aria-[invalid]:ring-error data-[placeholder]:text-primary-foreground-muted w-20 min-w-0 rounded-lg border px-4 py-2 text-base outline-none focus-visible:ring-2 data-[placeholder]:uppercase data-[type='literal']:hidden"
                segment={segment}
              />
            )}
          </>
        )}
      </DateInput>

      <RACFieldError>{errorMessage}</RACFieldError>
    </DateField>
  )
}
