import { lazy } from "react"

export const AuthorsPage = lazy(() => import("./Authors"))
export const BooksPage = lazy(() => import("./Books"))
export const NewAuthorPage = lazy(() => import("./NewAuthor"))
