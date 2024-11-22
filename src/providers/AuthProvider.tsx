import { client } from "@/services/httpClient"
import { PropsWithChildren, createContext, useEffect, useState } from "react"

export type AuthContextType = {
  isAuthenticated: boolean
  login: (loginData: LoginData) => void
  logout: () => void
}

export type LoginData = {
  username: string
  password: string
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
} as AuthContextType)

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(() => localStorage.getItem("token"))

  const handleLogin = (loginData: LoginData) => {
    // pass login data to API
    console.log("login data", loginData)
    // GET token from BE
    const token = "jdsofgoasdginfsogn"
    setToken(token)
    localStorage.setItem("token", token)
  }

  const handleLogout = () => {
    // rest of the logic
    setToken(null)
    localStorage.removeItem("token")
    delete client.defaults.headers.Authorization
  }

  useEffect(() => {
    if (token) {
      client.defaults.headers.Authorization = `Bearer ${token}`
      setToken(token)
    }
  }, [token])

  const contextValue: AuthContextType = {
    isAuthenticated: !!token,
    login: handleLogin,
    logout: handleLogout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
