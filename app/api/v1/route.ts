export async function GET(request: Request) {
  const body = {
    message: "documentation",
  };

  return Response.json(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
