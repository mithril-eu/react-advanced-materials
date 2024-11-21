import { paths } from "@/paths"
import { getAuthors } from "@/services/authors.service"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export default function Customers() {
  const { data } = useCustomersPage()

  return (
    <div>
      <div>
        <h1>Authors</h1>
        <Link to={paths.newAuthor()}>+ New author</Link>
      </div>
      <ul>
        {data?.map(({ id, firstName, lastName }) => (
          <li key={id}>{`${firstName} ${lastName}`}</li>
        ))}
      </ul>
    </div>
  )
}

export function useCustomersPage() {
  // const { isLoggedIn } = useContext(AuthContext)

  return useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
    // staleTime: 5000,
    // enabled: true,
    // placeholderData
  })
}
