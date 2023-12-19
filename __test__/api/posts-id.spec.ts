import { expect, test } from "vitest";
import { env } from "../../env.mjs";

test("it should be return the post content by id", async () => {
  const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/posts/a`);
  const posts = await response.json();

  expect(response.status).toBe(200);
});
