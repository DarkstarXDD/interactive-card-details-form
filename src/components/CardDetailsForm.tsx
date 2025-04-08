import TextField from "@/components/ui/TextField"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function CardDetailsForm({ className }: { className?: string }) {
  return (
    <form className={cn("grid w-full max-w-sm gap-7", className)}>
      <div className="grid gap-5">
        <TextField
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          // errorMessage="Name is required"
        />
        <TextField
          label="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
          // errorMessage="Name is required"
        />
        <div className="flex items-start gap-5">
          <div className="flex flex-3/5 shrink-0 items-start gap-2">
            <TextField
              label="Exp. Date"
              placeholder="MM"
              // errorMessage="Name is required"
            />
            <TextField
              label="(MM / YY)"
              placeholder="YY"
              // errorMessage="Name is required"
            />
          </div>

          <TextField
            label="CVC"
            placeholder="e.g. 123"
            // errorMessage="Name is required"
          />
        </div>
      </div>

      <Button>Confirm</Button>
    </form>
  )
}
