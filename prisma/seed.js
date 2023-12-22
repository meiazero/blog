import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient();

const data = [
  {
    postId: uuid(),
    title: "Intel lança novo chip de alto desempenho para laptops",
    body: "A Intel lançou hoje seu novo chip de alto desempenho, projetado especificamente para laptops. Este chip promete proporcionar até 50% de aumento na velocidade de processamento em comparação com seus antecessores.",
    author: "John Doe",
    published: true,
  },

  {
    postId: uuid(),
    title: "Google anuncia o lançamento do Android 12",
    body: "O Google anunciou hoje o lançamento do Android 12, a próxima versão do sistema operacional Android. Esta nova versão traz várias melhorias e novos recursos, incluindo uma nova interface de usuário, melhorias na privacidade e novos recursos de segurança.",
    author: "Jane Smith",
    published: true,
  },

  {
    postId: uuid(),
    title: "Apple revela o iPhone 13 com novas cores e capacidades de câmera",
    body: "A Apple revelou hoje o iPhone 13, a última adição à sua linha de smartphones. Este novo modelo apresenta novas cores e capacidades de câmera, incluindo uma câmera traseira de 12MP e uma câmera frontal de 12MP.",
    author: "Robert Brown",
    published: true,
  },

  {
    postId: uuid(),
    title: "Microsoft lança a nova geração do Surface Pro com processador M1",
    body: "A Microsoft lançou hoje a nova geração do Surface Pro, equipado com o poderoso processador M1 da Apple. Este novo modelo promete proporcionar um desempenho significativamente mais rápido em comparação com os modelos anteriores.",
    author: "Lisa Taylor",
    published: true,
  },

  {
    postId: uuid(),
    title: "Facebook anuncia novas medidas de privacidade após controvérsias",
    body: "Em resposta à crescente preocupação com a privacidade do usuário, a Facebook anunciou hoje uma série de novas medidas para proteger as informações pessoais dos usuários. Estas medidas incluem a implementação de recursos de transparência e opções de controle mais robustas.",
    author: "Mark Wilson",
    published: true,
  },
  {
    postId: uuid(),
    title:
      "'Hyperlapse' transforma o Google Street View em filmes curtos bonitos",
    body: "O 'Hyperlapse' é uma ferramenta que transforma o Google Street View em filmes curtos e bonitos. Com esta ferramenta, você pode criar vídeos impressionantes a partir de suas imagens do Google Maps.",
    author: "Scott Gilbertson",
    published: true,
  },
  {
    postId: uuid(),
    title: "Usando a API do NYTimes",
    body: "Para este artigo, vamos explorar duas APIs: a API de Busca de Artigos e a API de Principais Notícias. Com essas APIs, você pode buscar artigos e obter as principais notícias diretamente do NYTimes.",
    author: "Unknown Author",
    published: true,
  },
  {
    postId: uuid(),
    title:
      "Como manter-se atualizado com as últimas notícias de desenvolvimento front-end sem perder o dia inteiro rolado",
    body: "Existe um site chamado daily.dev que fornece um feed de notícias para desenvolvedores. Mesmo que você não role o site todo o dia, ainda receberá as notícias que deseja.",
    author: "Rach Smith",
    published: true,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (let _post of data) {
    let postCreated = await prisma.post.create({
      data: _post,
    });
    console.log(`Created post with id: ${postCreated?.id}`);
  }
  console.log(`Seeding finished.`);
}

main().finally(async () => {
  try {
    await prisma.$disconnect();
  } catch (e) {
    console.error("Error disconnecting from Prisma:", e);
  }
});
