import { cn } from "@/lib/utils"

import type { ComponentProps } from "react"

export default function Label({
  children,
  className,
  ...props
}: ComponentProps<"label">) {
  return (
    <label
      {...props}
      className={cn(
        "text-sm font-medium tracking-[0.125rem] uppercase",
        className
      )}
    >
      {children}
    </label>
  )
}
