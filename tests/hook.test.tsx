import { useCustomersPage } from "@/pages/Authors.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderHook, waitFor } from "@testing-library/react"
import nock from "nock"
import { PropsWithChildren } from "react"
import { describe, expect, test } from "vitest"

const createWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient()
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe("Custom hook with useQuery", () => {
  test("fetches correctly", async () => {
    const nockHeaders = {
      "Access-Control-Allow-Origin": "*",
    }

    const mockAuthors = [{ id: 1 }, { id: 2 }]
    nock("https://fakerestapi.azurewebsites.net/api/v1")
      .get("/Authors")
      .reply(200, mockAuthors, nockHeaders)

    const wrapper = createWrapper()
    const { result } = renderHook(() => useCustomersPage(), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    // console.log("Result", result.current.data)

    expect(result.current.data).toEqual(mockAuthors)
  })
})
