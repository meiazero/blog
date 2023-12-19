import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Page from "../app/page";

test("home", () => {
  render(<Page />);
  const h1 = screen.getByRole("heading", { name: "Olái mundo!" });
  expect(h1).toBeInstanceOf(HTMLElement);
});
