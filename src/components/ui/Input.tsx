import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export default function Input({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "border-border placeholder:text-primary-foreground-muted ring-border text-foreground aria-[invalid]:border-error aria-[invalid]:ring-error min-w-0 rounded-lg border px-4 py-2 text-base outline-none focus-visible:ring-2",
        className
      )}
    />
  )
}
