/*
  Warnings:

  - You are about to drop the column `cancellationReason` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `specialRequests` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Earnings` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `isFeatured` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `lastFour` on the `PaymentMethod` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `processedAt` on the `Withdrawal` table. All the data in the column will be lost.
  - You are about to drop the column `processedBy` on the `Withdrawal` table. All the data in the column will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "cancellationReason",
DROP COLUMN "specialRequests";

-- AlterTable
ALTER TABLE "Earnings" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "isActive",
DROP COLUMN "isFeatured",
DROP COLUMN "latitude",
DROP COLUMN "longitude";

-- AlterTable
ALTER TABLE "PaymentMethod" DROP COLUMN "lastFour";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "Withdrawal" DROP COLUMN "processedAt",
DROP COLUMN "processedBy";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "SystemSettings";
