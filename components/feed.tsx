import { env } from "@/env.mjs";
import { Post } from "@/types";

export async function Feed() {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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

function PostItem(post: Post) {
  return (
    <article className="px-2 py-4">
      <div>
        <h2 className="text-xl font-bold hover:underline" title={post.title}>{post.title}</h2>
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
