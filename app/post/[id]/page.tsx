import { env } from "@/env.mjs";
import { dateFormater } from "@/lib/utils";
import { Post } from "@/types";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.json());

  const data = await response?.data;

  return <PostBody {...data} />;
}

function PostBody(post: Post) {
  return (
    <div className="mx-auto my-20 max-w-4xl">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p className="mb-4 text-gray-600">By {post.author}</p>
      <p className="mb-4 text-gray-600">
        Published on {dateFormater(post?.createdAt as unknown as Date)}
      </p>
      <p className="mb-4 text-lg leading-relaxed">{post.body}</p>
    </div>
  );
}
