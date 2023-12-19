import { ResponseBodyType } from "@/type";

export async function GET(request: Request) {
  const body: ResponseBodyType = {
    method: "GET",
    "accept_params": false,
    params: [],
    "accept_body": false,
    message: "get all posts",
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const body: ResponseBodyType = {
    method: "POST",
    "accept_params": false,
    params: [],
    "accept_body": true,
    message: "create a post",
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
