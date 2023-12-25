import { Post } from "@/types";
import Link from "next/link";

export function PostItem(post: Post) {
  return (
    <article className="px-2 py-4">
      <div>
        <h2
          className="pb-2 text-2xl font-bold hover:underline"
          title={post.title}
        >
          <Link href={`/post/${post.postId}`}>{post.title}</Link>
        </h2>
        <span className="text-sm">
          {/* TODO: fazer uma função que pega a data de criação e calcula quanto tempo foi criado desde que foi criado */}
          <span className="capitalize text-gray-600">
            há <span className="italic">X</span> horas
          </span>
          <span className="text-gray-600"> · </span>
          {/* TODO: fazer uma função para verificar se houve edição e exibir "editado" */}
          <span className="capitalize  text-gray-600">editado</span>
        </span>
      </div>
      <p className="text-gray-600">{post.body}</p>
      <div>
        <span className="text-gray-600">{post.author}</span>
      </div>
    </article>
  );
}
