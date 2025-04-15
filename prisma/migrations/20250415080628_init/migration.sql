-- CreateTable
CREATE TABLE "CardDetails" (
    "id" TEXT NOT NULL,
    "cardholderName" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cvc" TEXT NOT NULL,
    "expirationMonth" INTEGER NOT NULL,
    "expirationYear" INTEGER NOT NULL,

    CONSTRAINT "CardDetails_pkey" PRIMARY KEY ("id")
);
