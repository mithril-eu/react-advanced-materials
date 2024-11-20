import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Dashboard from "@/pages/Dashboard.tsx"
import { paths } from "@/paths.ts"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout"
import { AuthorsPage, BooksPage, NewAuthorPage } from "./pages"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

// https://github.com/mithril-eu/react-advanced-materials

const queryClient = new QueryClient()

const router = createBrowserRouter(
  [
    {
      path: paths.dashboard(),
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: paths.authors(),
          element: (
            <Suspense fallback="LOADING...">
              <AuthorsPage />
            </Suspense>
          ),
        },
        {
          path: paths.newAuthor(),
          element: (
            <Suspense fallback="LOADING...">
              <NewAuthorPage />
            </Suspense>
          ),
        },
        {
          path: paths.books(),
          element: (
            <Suspense fallback="LOADING...">
              <BooksPage />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
