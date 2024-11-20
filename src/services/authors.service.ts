import { Author } from "@/types"
import { client } from "./httpClient"

export async function getAuthors(): Promise<Author[]> {
  // with fetch API
  // const res = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Authors")
  // const data = await res.json()
  // return data

  // with Axios API

  const res = await client.get("/Authors")

  return res.data
}

export async function saveAuthor(data: Author): Promise<Author> {
  const res = await client.post("/Authors", data)

  return res.data
}
