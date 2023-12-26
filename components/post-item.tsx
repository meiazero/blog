import { publishingDateFormatter } from "@/lib/utils";
import { Post } from "@/types";
import Link from "next/link";

export function PostItem(post: Post) {
  return (
    <article className="px-2 py-4">
      <div>
        <Link
          href={`/post/${post.postId}`}
          title={post.title}
          className="pb-2 text-2xl font-bold hover:underline"
        >
          {post.title}
        </Link>
        <span className="block py-1 text-sm">
          {/* TODO: fazer uma função que pega a data de criação e calcula quanto tempo foi criado desde que foi criado */}
          <span className="capitalize text-gray-600">
            há {publishingDateFormatter(post.updatedAt as Date)}
          </span>
          <span className="hidden text-gray-600"> · </span>
          {/* TODO: fazer uma função para verificar se houve edição e exibir "editado" */}
          {/* <span className="capitalize  text-gray-600">editado</span> */}
        </span>
      </div>
      <p className="text-gray-600">{post.body}</p>
      <div>
        <span className="text-gray-600">{post.author}</span>
      </div>
    </article>
  );
}
