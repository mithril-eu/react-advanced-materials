import { createContext } from "react"
import { AuthContextType } from "./AuthProvider"

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
} as AuthContextType)
