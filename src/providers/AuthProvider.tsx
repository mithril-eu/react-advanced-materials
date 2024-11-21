import { paths } from "@/paths"
import { client } from "@/services/httpClient"
import { createContext, PropsWithChildren, useEffect, useState } from "react"

export type AuthContextType = {
  isLoggedIn: boolean
  login: (loginData: LoginData) => Promise<void>
  logout: () => void
}

export type LoginData = {
  username: string
  password: string
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
} as AuthContextType)

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(() => localStorage.getItem("token"))

  const handleLogin = async (loginData: LoginData) => {
    // pass login data to API
    console.log("login data", loginData)
    const tokenFromBe = "jdsofgoasdginfsogn"
    setToken(tokenFromBe)
    localStorage.setItem("token", tokenFromBe)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    // rest of the logic
    setToken(null)
    localStorage.removeItem("token")
    client.defaults.headers["Authorization"] = null
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if (isLoggedIn && token && window.location.pathname === paths.login()) {
      client.defaults.headers["Authorization"] = `Bearer ${token}`
      window.location.href = paths.dashboard()
    }
  }, [isLoggedIn, token, window.location.href])

  const contextValue: AuthContextType = {
    isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
