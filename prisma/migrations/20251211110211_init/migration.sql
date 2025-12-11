-- CreateEnum
CREATE TYPE "MenuType" AS ENUM ('DRINKS', 'PASTRIES', 'FOOD', 'OTHER');

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "type" "MenuType" NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
