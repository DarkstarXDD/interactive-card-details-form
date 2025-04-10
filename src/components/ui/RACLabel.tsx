import { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Label } from "react-aria-components"

export default function RACLabel({
  children,
  className,
  ...props
}: ComponentProps<"label">) {
  return (
    <Label
      {...props}
      className={cn(
        "text-sm font-medium tracking-[0.125rem] uppercase",
        className
      )}
    >
      {children}
    </Label>
  )
}
