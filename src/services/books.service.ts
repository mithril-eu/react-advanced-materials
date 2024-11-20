import { Book } from "@/types"
import { client } from "./httpClient"

export async function getBooks(): Promise<Book[]> {
  // const res = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
  // const data = await res.json()
  // return data

  const res = await client.get("/Books")
  return res.data
}
