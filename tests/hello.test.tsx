import { Hello, Input } from "@/hello.tsx"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, vi } from "vitest"

describe("Hello component", () => {
  it("renders correctly", () => {
    //   mounts <Hello> component to jsdom
    render(<Hello />)

    // prints/debugs current jsdom to console
    // screen.debug()
    screen.getByText("Hello")
  })

  it("test Input component", async () => {
    const handleChange = vi.fn()

    render(<Input value="" onChange={handleChange} />)

    await userEvent.setup().type(screen.getByRole("textbox"), "Test")

    // TODO: Find out why userEvent is not firing
    // expect(handleChange).toHaveBeenCalledTimes(4)

    screen.debug()
  })
})
