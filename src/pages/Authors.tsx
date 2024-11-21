import { paths } from "@/paths"
import { getAuthors } from "@/services/authors.service"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export default function Authors() {
  const { data } = useAuthorsPage()

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

export function useAuthorsPage() {
  // const { isLoggedIn } = useContext(AuthContext)

  return useQuery({
    queryKey: ["authors"],
    queryFn: getAuthors,
    // staleTime: 5000, // how long will data be considered fresh
    // enabled: true, // query is enabled/disabled
    // placeholderData
  })
}
