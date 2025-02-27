-- CreateTable
CREATE TABLE "Tea_Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Tea_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flavour" (
    "id" SERIAL NOT NULL,
    "flavourName" TEXT NOT NULL,
    "prod_flavourId" INTEGER NOT NULL,

    CONSTRAINT "Flavour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tea_Category" (
    "id" SERIAL NOT NULL,
    "catName" TEXT NOT NULL,
    "prod_catId" INTEGER NOT NULL,

    CONSTRAINT "Tea_Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Flavour_flavourName_key" ON "Flavour"("flavourName");

-- CreateIndex
CREATE UNIQUE INDEX "Tea_Category_catName_key" ON "Tea_Category"("catName");

-- AddForeignKey
ALTER TABLE "Flavour" ADD CONSTRAINT "Flavour_prod_flavourId_fkey" FOREIGN KEY ("prod_flavourId") REFERENCES "Tea_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tea_Category" ADD CONSTRAINT "Tea_Category_prod_catId_fkey" FOREIGN KEY ("prod_catId") REFERENCES "Tea_Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
