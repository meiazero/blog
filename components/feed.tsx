import { env } from "@/env.mjs";
import { Post } from "@/types";
import { PostItem } from "./post-item";

export async function Feed() {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then(response => response.json());

  let data = response?.data;

  if (!data) {
    return (
      <div className="space-y-4">
        <p className="text-center">Nenhum post encontrado</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data?.map((post: Post) => <PostItem key={post.id} {...post} />)}
    </div>
  );
}
