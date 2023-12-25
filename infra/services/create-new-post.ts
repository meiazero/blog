import { prisma } from "@/infra/db/connection";
import { Post } from "@/types";
import { v4 as uuidv4 } from "uuid";

async function createNewPost(post: Post) {
  const postCreated = prisma.post.create({
    data: {
      postId: uuidv4(),
      title: post.title,
      body: post.body,
      banner: post.banner as string,
      author: post.author,
      published: post.published,
    },
  });

  return postCreated;
}

export { createNewPost };
