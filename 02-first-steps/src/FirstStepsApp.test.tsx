import { describe, vi, expect, test, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));
// vi.mock("./shopping-cart/ItemCounter", () => ({
// ItemCounter: (props: unknown) => (
// <div
//   data-testid="ItemCounter"
//   name={props.name}
//   quantity={props.quantity}
// />
// ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepsApp />);

    const itemCounterComponent = screen.getAllByTestId("ItemCounter");
    console.log(itemCounterComponent.length);
    expect(itemCounterComponent.length).toBe(3);
    screen.debug();
  });

  test("should render ItenCounter whit correct props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
  });
  test("shoudl render ItenCounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Play Station",
      quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo Switch 2",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Super Nintendo",
      quantity: 2,
    });
  });
});
