export type FormValuesType = {
  cardholderName?: string | undefined
  cardNumber?: string | undefined
  cvc?: string | undefined
  expirationDate?: {
    month?: number | undefined
    year?: number | undefined
  }
}
