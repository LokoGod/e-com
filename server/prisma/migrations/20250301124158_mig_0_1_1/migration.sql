-- DropForeignKey
ALTER TABLE "Flavour" DROP CONSTRAINT "Flavour_prod_flavourId_fkey";

-- DropForeignKey
ALTER TABLE "Tea_Category" DROP CONSTRAINT "Tea_Category_prod_catId_fkey";

-- AlterTable
ALTER TABLE "Flavour" ALTER COLUMN "prod_flavourId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tea_Category" ALTER COLUMN "prod_catId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Flavour" ADD CONSTRAINT "Flavour_prod_flavourId_fkey" FOREIGN KEY ("prod_flavourId") REFERENCES "Tea_Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tea_Category" ADD CONSTRAINT "Tea_Category_prod_catId_fkey" FOREIGN KEY ("prod_catId") REFERENCES "Tea_Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
