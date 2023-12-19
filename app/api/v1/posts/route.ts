import { getAllPost } from "@/infra/services/get-all-posts";
import { ResponseBodyType } from "@/types";

export async function GET(request: Request) {

  const data = await getAllPost();

  const body: ResponseBodyType = {
    method: "GET",
    accept_params: false,
    params: [],
    accept_body: false,
    message: "get all posts",
    // @ts-ignore
    data
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body: ResponseBodyType = {
    method: "POST",
    accept_params: false,
    params: [],
    accept_body: true,
    message: "create a post",
    data: []
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
