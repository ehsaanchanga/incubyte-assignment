import { add } from "../src";
import { describe, test, expect } from "@jest/globals";

describe("add Numbers", () => {
  test("Add function exists", () => {
    expect(add).toBeDefined();
  });
});
