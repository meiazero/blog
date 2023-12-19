import { ResponseBodyType } from "@/types";
import { z } from "zod";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export async function GET(
  request: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  const body: ResponseBodyType = {
    method: "GET",
    accept_params: true,
    params: [{ id: context.params.id }],
    accept_body: false,
    message: "get a post by id",
    data: []
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PUT(
  request: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  const body: ResponseBodyType = {
    method: "PUT",
    accept_params: false,
    params: [{ id: context.params.id }],
    accept_body: true,
    message: "update a post",
    data: []
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  const body: ResponseBodyType = {
    method: "DELETE",
    accept_params: false,
    params: [{ id: context.params.id }],
    accept_body: true,
    message: "delete a post",
    data: []
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
