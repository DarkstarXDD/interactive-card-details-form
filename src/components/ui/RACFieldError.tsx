import { ComponentProps } from "react"
import { FieldError } from "react-aria-components"

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
