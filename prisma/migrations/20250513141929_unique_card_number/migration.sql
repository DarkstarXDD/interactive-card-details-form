/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber]` on the table `CardDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CardDetails_cardNumber_key" ON "CardDetails"("cardNumber");
