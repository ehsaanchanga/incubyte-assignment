import { add } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("add Numbers", () => {
  test("Add function exists", () => {
    expect(add).toBeDefined();
  });

  it("should return added sum of numbers from the input string", () => {
    const actual = add("1,4,8");
    expect(actual).toBe(13);
  });

  it("should take , as a delimiter", () => {
    const actual = add("1,4,8");
    expect(actual).toBe(13);
  });

  it("should take new line as a delimiter", () => {
    const actual = add("1,4,8\n7");
    expect(actual).toBe(20);
  });

  it("should allow custom delimiter", () => {
    const actual = add("//;\n1;4;8");
    expect(actual).toBe(13);
  });

  it("should not allow negative numbers and throws error", () => {
    const actual = add("1,4,8,-4");
    expect(actual).toBe(13);
    expect(() => {
      add("1,4,8,-4");
    }).toThrow("negative numbers not allowed -4");
  });
});
