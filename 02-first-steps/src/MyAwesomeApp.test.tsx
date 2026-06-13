import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    // console.log(document.body);
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toBe("Javier");
    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Lázaro");
  });
});

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName - screen", () => {
    // console.log(document.body);
    const { container } = render(<MyAwesomeApp />);
    screen.debug();

    // const h1 = screen.getByRole("heading", { level: 1 });
    const h1 = screen.getByTestId("first-name-title");
    console.log(h1.innerHTML);
  });

  test("should match snaptshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
