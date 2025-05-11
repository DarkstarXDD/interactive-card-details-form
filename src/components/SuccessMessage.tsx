import AnimatedCheckmark from "@/components/AnimatedCheckmark"
import Button from "@/components/ui/Button"

export default function SuccessMessage({
  onContinue,
}: {
  onContinue: () => void
}) {
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

        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  )
}
