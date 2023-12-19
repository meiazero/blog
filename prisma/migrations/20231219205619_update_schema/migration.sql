-- DropIndex
DROP INDEX "posts_postId_key";

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "postId" SET DATA TYPE TEXT;
