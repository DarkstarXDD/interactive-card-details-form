import LoadingCircleSpinner from "@/components/LoadingCircleSpinner"
import Button from "@/components/ui/Button"

import type { SubmitButtonStatus } from "@/components/CardDetailsForm"

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
