import { PropsWithChildren } from "react"
import { useAuth } from "./ProtectedRoute"
import { Navigate } from "react-router-dom"
import { paths } from "@/paths"

type CustomRouteProps = PropsWithChildren & {
  type: "public" | "private"
}

export function CustomRoute({ children, type }: CustomRouteProps) {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn && type === "public") {
    return Navigate({ to: paths.dashboard() })
  } else if (!isLoggedIn && type === "private") {
    return Navigate({ to: paths.login() })
  }

  return children
}
