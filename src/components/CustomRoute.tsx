import { paths } from "@/paths"
import { AuthContext } from "@/providers/AuthProvider.tsx"
import { PropsWithChildren, useContext } from "react"
import { Navigate } from "react-router-dom"

type CustomRouteProps = PropsWithChildren & {
  type: "public" | "private"
}

export function CustomRoute({ children, type }: CustomRouteProps) {
  const { isAuthenticated } = useContext(AuthContext)

  console.log("IS AUTHENTICATED", isAuthenticated)

  if (isAuthenticated && type === "public") {
    return <Navigate to={paths.dashboard()} />
  } else if (!isAuthenticated && type === "private") {
    return <Navigate to={paths.login()} />
  }

  return children
}
