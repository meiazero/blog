import { dateFormater } from "@/lib/utils";
import { Post } from "@/types";
import { Banner } from "./banner";

export function PostBody(post: Post) {
  return (
    <div className="mx-auto mt-14 max-w-5xl">
      <Banner
        url={post.banner as string}
        altImage={post.title}
        titleImage={post.title}
      />

      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p className="mb-4 text-gray-600">By {post.author}</p>
      <p className="mb-4 text-gray-600">
        Published on {dateFormater(post?.createdAt as unknown as Date)}
      </p>
      <p className="mb-4 text-lg leading-relaxed">{post.body}</p>
    </div>
  );
}
