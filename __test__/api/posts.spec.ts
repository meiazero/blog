import { expect, test } from "vitest";
import { env } from "../../env.mjs";

test("it should be return all the posts in to database", async () => {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts`);
  const posts = await response.json();

  expect(response.status).toBe(200);
});
