import { describe, expect, test } from "vitest";
import { add, multiply, subtract, divide } from "./math.helper";

describe("add", () => {
  test("should add two positive numbers", () => {
    // Esta sería una forma muy manual de hacerlo
    // if (result !== 2) {
    //   throw new Error("el resultado no es 2");
    // }

    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = add(a, b);

    // ! 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should extract two positive numbers", () => {
    // Esta sería una forma muy manual de hacerlo
    // if (result !== 2) {
    //   throw new Error("el resultado no es 2");
    // }

    // ! 1. Arrange
    const a = 2;
    const b = 1;

    // ! 2. Act
    const result = subtract(a, b);

    // ! 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    // Esta sería una forma muy manual de hacerlo
    // if (result !== 2) {
    //   throw new Error("el resultado no es 2");
    // }

    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = multiply(a, b);

    // ! 3. Assert
    expect(result).toBe(a * b);
  });
});
describe("divide", () => {
  test("should devide two positive numbers", () => {
    // ! 1. Arrange
    const a = 1;
    const b = 2;

    // ! 2. Act
    const result = divide(a, b);

    // ! 3. Assert
    expect(result).toBe(a / b);
  });
});
