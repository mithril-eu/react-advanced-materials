import { someBusinessLogicFunction } from "@/utils.ts"
import { describe, expect, test } from "vitest"

describe("Test suite", () => {
  test("should initialize properly", () => {
    expect(1 + 1).toBe(2)
  })
})

describe("Util - someBusinessLogicFunction", () => {
  test("SHOULD return true if number is bigger than 2", () => {
    expect(someBusinessLogicFunction(5)).toBe(true)
  })

  test("SHOULD return false if number is lower than 2", () => {
    expect(someBusinessLogicFunction(1)).toBe(false)
  })
})
