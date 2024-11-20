import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Dashboard from "@/pages/Dashboard.tsx"
import { paths } from "@/paths.ts"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout"
import { CustomersPage, InvoicesPage } from "./pages"

const router = createBrowserRouter([
  {
    path: paths.dashboard(),
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: paths.customers(),
        element: (
          <Suspense fallback="LOADING...">
            <CustomersPage />
          </Suspense>
        ),
      },
      {
        path: paths.invoices(),
        element: (
          <Suspense fallback="LOADING...">
            <InvoicesPage />
          </Suspense>
        ),
      },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
