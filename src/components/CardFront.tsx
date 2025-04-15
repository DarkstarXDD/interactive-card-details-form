export default function CardFront({
  cardholderName,
  cardNumber,
  expMonth,
  expYear,
}: {
  cardholderName: string | undefined
  cardNumber: string | undefined
  expMonth: number | undefined
  expYear: number | undefined
}) {
  return (
    <div className="col-start-1 col-end-6 row-start-5 row-end-12 grid grid-rows-1 lg:row-start-1 lg:row-end-7">
      <div className="grid h-full gap-9 rounded-md bg-[url(../assets/bg-card-front.png)] bg-cover bg-center bg-no-repeat p-5 lg:gap-16 lg:rounded-lg lg:p-8">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-white"></div>
          <div className="size-4 rounded-full border border-white"></div>
        </div>

        <div className="grid gap-4 lg:gap-6">
          <p className="xs:text-base truncate text-xs font-medium tracking-[2px] text-nowrap text-white lg:text-xl">
            {cardNumber ? formatCardNumber(cardNumber) : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between truncate text-xs font-medium tracking-[1px] text-white uppercase lg:text-base">
            <p className="truncate">{cardholderName || "Jane Appleseed"}</p>
            <p>
              {expMonth ? formatMonth(expMonth) : "00"}/
              {expYear ? fomrmatYear(expYear) : "0000"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatCardNumber(cardNumber: string) {
  return cardNumber.replace(/(.{4})/g, "$1 ").trim()
}

function formatMonth(month: number) {
  return String(month).padStart(2, "0")
}

function fomrmatYear(year: number) {
  return String(year).padStart(4, "0")
}
