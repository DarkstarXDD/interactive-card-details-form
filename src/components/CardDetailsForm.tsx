import TextField from "@/components/ui/TextField"

export default function CardDetailsForm() {
  return (
    <form>
      <TextField
        label="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        errorMessage="Name is required"
      />
    </form>
  )
}
