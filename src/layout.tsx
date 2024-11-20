import { Link, Outlet } from "react-router-dom"
import { paths } from "./paths"

export function Layout() {
  return (
    <>
      <header style={{ display: "flex", gap: "20px" }}>
        <Link to={paths.dashboard()}>Dashboard</Link>
        <Link to={paths.authors()}>Authors</Link>
        <Link to={paths.books()}>Books</Link>
      </header>
      <Outlet />
    </>
  )
}
