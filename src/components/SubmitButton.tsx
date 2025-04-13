import Button from "@/components/ui/Button"
import type { SubmitButtonStatus } from "@/components/CardDetailsForm"
import LoadingCircleSpinner from "@/components/LoadingCircleSpinner"

export default function SubmitButton({
  status,
}: {
  status: SubmitButtonStatus
}) {
  return (
    <Button disabled={status === "loading"}>
      {status === "loading" ? (
        <div className="flex items-center justify-center gap-3">
          <span>Submitting</span>
          <LoadingCircleSpinner />
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  )
}
