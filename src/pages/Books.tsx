import { getBooks } from "@/services/books.service"
import { useQuery } from "@tanstack/react-query"

export default function Books() {
  const { data, isPending } = useBooksPage()

  return (
    <div>
      <h1>Books</h1>
      {isPending && <span>LOADING...</span>}
      {!isPending && (
        <ul>
          {data?.map(({ id, title }) => (
            <article key={id}>{title}</article>
          ))}
        </ul>
      )}
    </div>
  )
}

function useBooksPage() {
  const { data, isPending } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  })

  return { data, isPending }
}
