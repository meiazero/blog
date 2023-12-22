import { prisma } from "@/infra/db/connection";
import { Post } from "@/types";

async function getAllPost(): Promise<Post[] | []> {
  const postsFound = prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return postsFound;
}

export { getAllPost };
