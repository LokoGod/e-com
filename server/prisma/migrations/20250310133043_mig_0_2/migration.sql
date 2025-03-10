/*
  Warnings:

  - You are about to drop the column `prod_flavourId` on the `Flavour` table. All the data in the column will be lost.
  - You are about to drop the column `prod_catId` on the `Tea_Category` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Tea_Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flavourId` to the `Tea_Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flavour" DROP CONSTRAINT "Flavour_prod_flavourId_fkey";

-- DropForeignKey
ALTER TABLE "Tea_Category" DROP CONSTRAINT "Tea_Category_prod_catId_fkey";

-- AlterTable
ALTER TABLE "Flavour" DROP COLUMN "prod_flavourId";

-- AlterTable
ALTER TABLE "Tea_Category" DROP COLUMN "prod_catId";

-- AlterTable
ALTER TABLE "Tea_Product" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "flavourId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User_Details" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" INTEGER NOT NULL,
    "phonNumber" INTEGER NOT NULL,

    CONSTRAINT "User_Details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userShippingDetails" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "orderDateTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Details_email_key" ON "User_Details"("email");

-- AddForeignKey
ALTER TABLE "Tea_Product" ADD CONSTRAINT "Tea_Product_flavourId_fkey" FOREIGN KEY ("flavourId") REFERENCES "Flavour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tea_Product" ADD CONSTRAINT "Tea_Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Tea_Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
