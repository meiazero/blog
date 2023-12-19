/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `posts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "posts_postId_key" ON "posts"("postId");
