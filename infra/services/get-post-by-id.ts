import { Post } from "@/types";
import { prisma } from "../db/connection";

function getPostById(id: string): Promise<Post | null> {
  const postFound = prisma.post.findFirst({
    where: {
      postId: id,
    },
  });

  return postFound;
}

export { getPostById };
