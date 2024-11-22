import { paths } from "@/paths"
import { saveAuthor } from "@/services/authors.service"
import { useMutation } from "@tanstack/react-query"
import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

export default function NewAuthor() {
  //   const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: saveAuthor,
    onSuccess: () => {
      console.log("Success")
      // Invalidate and refetch
      //   queryClient.invalidateQueries({ queryKey: ['authors'] })
    },
    onError: () => {
      console.log("Error")
    },
    onSettled: () => {
      navigate(paths.authors())
    },
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Uncontrolled
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string

    console.log("Podaci", firstName, lastName)
    mutation.mutate({
      id: 0,
      idBook: 0,
      firstName,
      lastName,
    })
  }

  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>NEW AUTHOR</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "200px",
        }}
        onSubmit={handleSubmit}
      >
        {/* Uncontrolled input */}
        {/* <input
          type="text"
          name="firstName"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /> */}
        {/* Controlled input */}
        <input type="text" name="firstName" required />
        <input type="text" name="lastName" required />
        <button type="submit">Save</button>
      </form>
    </>
  )
}
