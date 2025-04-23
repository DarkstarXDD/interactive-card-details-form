export type CardValuesType = {
  cardholderName?: string
  cardNumber?: string
  cvc?: string
  expirationDate?: {
    month?: number
    year?: number
  }
}
