import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";
import { render, screen } from "@testing-library/react";

describe("CustomHeader", () => {
  const title = "Test title";
  const description = "Test description";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);
    expect(screen.getByText(title)).toBeDefined();
    // screen.debug();
  });
  test("should render the description when provded", () => {
    render(<CustomHeader title={title} description={description} />);
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(description);
  });

  test("should note render description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);
    const divElement = container.querySelector(".content-center");
    const h1 = divElement?.querySelector("h1");
    expect(h1?.innerHTML).toBe(title);
    const p = divElement?.querySelector("p");
    expect(p).toBeNull();
  });
});
