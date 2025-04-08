import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export default function Button({
  children,
  className,
}: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "text-primary-foreground ring-offset-background ring-primary-background hover:bg-primary-background/90 bg-primary-background w-full cursor-pointer rounded-lg p-4 text-base font-medium ring-offset-2 transition-colors outline-none focus-visible:ring-2",
        className
      )}
    >
      {children}
    </button>
  )
}
