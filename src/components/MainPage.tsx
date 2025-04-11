"use client"

import Image from "next/image"
import cardFront from "../assets/bg-card-front.png"
import cardBack from "../assets/bg-card-back.png"
import CardDetailsForm from "@/components/CardDetailsForm"
import SuccessMessage from "@/components/SuccessMessage"
import { useState } from "react"

export default function MainPage() {
  const [isSubmitSucess, setIsSubmitSucess] = useState(true)

  function showForm() {
    console.log("Triggered")
    setIsSubmitSucess(false)
  }

  function showSuccessMessage() {
    setIsSubmitSucess(true)
  }

  return (
    <div className="grid w-full lg:grid-cols-[10rem_20rem_1fr] xl:grid-cols-[10rem_20rem_13.75rem_1fr]">
      <div className="col-start-1 row-start-1 row-end-2 h-60 bg-[url(../assets/bg-main-mobile.png)] bg-cover bg-no-repeat lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:min-h-dvh lg:bg-[url(../assets/bg-main-desktop.png)]"></div>
      <div className="col-start-1 row-start-1 row-end-3 m-auto grid max-w-sm px-4 pt-8 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:max-w-md lg:grid-rows-[repeat(13,_minmax(0,_1fr))] lg:p-0 xl:col-start-2 xl:col-end-4 xl:max-w-135">
        <Image
          src={cardBack}
          alt=""
          className="col-start-2 col-end-7 row-start-1 row-end-8 lg:row-start-8 lg:row-end-14"
        />
        <Image
          src={cardFront}
          alt=""
          className="col-start-1 col-end-6 row-start-5 row-end-12 lg:row-start-1 lg:row-end-7"
        ></Image>
      </div>
      <div className="grid items-center justify-items-center px-6 py-12">
        {isSubmitSucess ? (
          <SuccessMessage onContinue={showForm} />
        ) : (
          <CardDetailsForm onSubmit={showSuccessMessage} />
        )}
      </div>
    </div>
  )
}
