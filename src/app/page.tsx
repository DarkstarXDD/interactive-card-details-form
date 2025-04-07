import Image from "next/image"
import cardFront from "../assets/bg-card-front.png"
import cardBack from "../assets/bg-card-back.png"

export default function HomePage() {
  return (
    <main>
      <div className="grid w-full lg:grid-cols-[auto_1fr]">
        <div className="h-60 bg-[url(../assets/bg-main-mobile.png)] bg-cover bg-no-repeat px-4 py-8 lg:h-dvh lg:bg-[url(../assets/bg-main-desktop.png)]">
          <div className="m-auto grid max-w-sm lg:max-w-135 lg:grid-rows-[repeat(13,_minmax(0,_1fr))]">
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
        </div>
      </div>
    </main>
  )
}
