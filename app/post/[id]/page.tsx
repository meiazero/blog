import { PostBody } from "@/components/post-body";
import { env } from "@/env.mjs";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then(response => response.json());

  const data = await response?.data;

  return <PostBody {...data} />;
}
