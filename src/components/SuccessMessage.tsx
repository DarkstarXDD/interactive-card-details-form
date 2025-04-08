import Button from "@/components/ui/Button"
import AnimatedCheckmark from "@/components/AnimatedCheckmark"

export default function SuccessMessage() {
  return (
    <div className="grid w-full max-w-sm justify-items-center gap-9">
      <AnimatedCheckmark />
      <div className="grid w-full gap-12">
        <div className="text-foreground grid gap-4 text-center font-medium">
          <h1 className="text-3xl">Thank You!</h1>
          <p className="text-foreground-muted text-base">
            We’ve added your card details.
          </p>
        </div>

        <Button>Continue</Button>
      </div>
    </div>
  )
}
