import { AuthContext } from "@/providers/AuthProvider"
import { PropsWithChildren, useContext } from "react"
import { Navigate } from "react-router-dom"
import { paths } from "@/paths"

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { isLoggedIn } = useAuth()
  console.log("IS logged in", isLoggedIn)

  if (!isLoggedIn) {
    return Navigate({ to: paths.login() })
  }

  return children
}

export function useAuth() {
  const { isLoggedIn, login, logout } = useContext(AuthContext)

  // additional logic

  return { isLoggedIn, login, logout }
}
