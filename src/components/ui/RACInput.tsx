"use client"

import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Input } from "react-aria-components"

export default function RACInput({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <Input
      {...props}
      className={cn(
        "border-border placeholder:text-primary-foreground-muted ring-ring text-foreground aria-[invalid]:border-error aria-[invalid]:ring-error w-full min-w-0 rounded-lg border px-4 py-2 text-base outline-none focus-visible:ring-2",
        className
      )}
    />
  )
}
