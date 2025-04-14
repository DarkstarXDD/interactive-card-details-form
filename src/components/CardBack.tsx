export default function CardBack({ cvc }: { cvc: string | undefined }) {
  return (
    <div className="col-start-2 col-end-7 row-start-1 row-end-8 grid lg:row-start-8 lg:row-end-14">
      <div className="bg-card-bg flex h-full flex-col items-center gap-4 rounded-md py-3 lg:gap-6 lg:rounded-lg lg:py-5">
        <div className="bg-card-black h-7 w-full lg:h-14"></div>
        <div className="flex w-full px-6 lg:px-10">
          <div className="bg-card-grey flex h-7 w-full items-center justify-end rounded px-3 lg:h-10 lg:px-4">
            <span className="text-foreground text-sm font-medium">
              {cvc ?? 123}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
