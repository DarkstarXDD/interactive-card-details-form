import { FieldError } from "react-aria-components"
import type { ComponentProps } from "react"

export default function RACFieldError({
  children,
  ...props
}: ComponentProps<"span">) {
  return (
    <FieldError {...props} className="text-error text-sm font-medium">
      {children}
    </FieldError>
  )
}
