import { Link, Outlet } from "react-router-dom"

export function Layout() {
  return (
    <>
      <header style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/invoices">Invoices</Link>
      </header>
      <Outlet />
    </>
  )
}
