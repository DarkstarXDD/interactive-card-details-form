import type { ComponentProps } from "react"

export default function FieldError({
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p {...props} className="text-error text-sm font-medium">
      {children}
    </p>
  )
}
