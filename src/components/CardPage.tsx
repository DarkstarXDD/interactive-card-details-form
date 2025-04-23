"use client"

import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { CardFormSchema, type CardFormType } from "@/lib/schemas/cardFormSchema"

import CardFront from "@/components/CardFront"
import CardBack from "@/components/CardBack"
import CardDetailsForm from "@/components/CardDetailsForm"
import SuccessMessage from "@/components/SuccessMessage"

export default function CardPage() {
  const [isSubmitSucess, setIsSubmitSucess] = useState(false)

  function showForm() {
    form.reset()
    setIsSubmitSucess(false)
  }

  function showSuccessMessage() {
    setIsSubmitSucess(true)
  }

  const form = useForm<CardFormType>({
    resolver: zodResolver(CardFormSchema),
  })

  const cardValues = useWatch({ control: form.control })

  return (
    <div className="grid w-full lg:grid-cols-[30rem_1fr] xl:grid-cols-[10rem_20rem_13.75rem_1fr]">
      <h1 className="sr-only">Interactive Card Details Form</h1>

      <div className="col-start-1 row-start-1 row-end-2 h-60 bg-[url(../assets/bg-main-mobile.png)] bg-cover bg-no-repeat lg:col-end-2 lg:min-h-dvh lg:bg-[url(../assets/bg-main-desktop.png)] xl:col-end-3"></div>

      <div className="col-start-1 row-start-1 row-end-3 m-auto grid w-full max-w-sm grid-cols-6 grid-rows-[repeat(11,_minmax(0,_1fr))] px-4 pt-8 lg:col-end-2 lg:max-w-md lg:grid-rows-[repeat(13,_minmax(0,_1fr))] lg:p-0 xl:col-start-2 xl:col-end-4 xl:max-w-135">
        <CardBack cvc={cardValues?.cvc} />
        <CardFront
          cardholderName={cardValues?.cardholderName}
          cardNumber={cardValues?.cardNumber}
          expMonth={cardValues?.expirationDate?.month}
          expYear={cardValues?.expirationDate?.year}
        />
      </div>

      <div className="grid items-center justify-items-center px-6 py-12">
        {isSubmitSucess ? (
          <SuccessMessage onContinue={showForm} />
        ) : (
          <CardDetailsForm form={form} onSuccess={showSuccessMessage} />
        )}
      </div>
    </div>
  )
}
