"use client"

import CardFront from "@/components/CardFront"
import CardBack from "@/components/CardBack"
import CardDetailsForm from "@/components/CardDetailsForm"
import SuccessMessage from "@/components/SuccessMessage"
import { useState } from "react"
import { FormValuesType } from "@/lib/types"

export default function MainPage() {
  const [isSubmitSucess, setIsSubmitSucess] = useState(false)
  const [formValues, setFormValues] = useState<FormValuesType>()

  function showForm() {
    setIsSubmitSucess(false)
  }

  function showSuccessMessage() {
    setIsSubmitSucess(true)
  }

  function updateFormValues(newValues: FormValuesType) {
    setFormValues(newValues)
  }

  return (
    <div className="grid w-full lg:grid-cols-[10rem_20rem_1fr] xl:grid-cols-[10rem_20rem_13.75rem_1fr]">
      <div className="col-start-1 row-start-1 row-end-2 h-60 bg-[url(../assets/bg-main-mobile.png)] bg-cover bg-no-repeat lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:min-h-dvh lg:bg-[url(../assets/bg-main-desktop.png)]"></div>

      <div className="col-start-1 row-start-1 row-end-3 m-auto grid w-full max-w-sm grid-cols-6 grid-rows-[repeat(11,_minmax(0,_1fr))] px-4 pt-8 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:max-w-md lg:grid-rows-[repeat(13,_minmax(0,_1fr))] lg:p-0 xl:col-start-2 xl:col-end-4 xl:max-w-135">
        <CardBack cvc={formValues?.cvc} />
        <CardFront
          cardholderName={formValues?.cardholderName}
          cardNumber={formValues?.cardNumber}
          expMonth={formValues?.expirationDate?.month}
          expYear={formValues?.expirationDate?.year}
        />
      </div>

      <div className="grid items-center justify-items-center px-6 py-12">
        {isSubmitSucess ? (
          <SuccessMessage onContinue={showForm} />
        ) : (
          <CardDetailsForm
            onSuccess={showSuccessMessage}
            onUpdate={updateFormValues}
          />
        )}
      </div>
    </div>
  )
}
