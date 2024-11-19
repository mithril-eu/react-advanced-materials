import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Dashboard</h1>
          </div>
        ),
      },
      {
        path: "/customers",
        element: (
          <div>
            <h1>Customers</h1>
          </div>
        ),
      },
      {
        path: "/invoices",
        element: (
          <div>
            <h1>Invoices</h1>
          </div>
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
