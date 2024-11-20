export const paths = {
  login: () => "/login",
  dashboard: () => "/",
  books: () => "/books",
  invoice: (id = ":id") => `/invoices/${id}`,
  // invoiceSomething: (id = ":id", slug = ":slug") => `/invoices/${id}/something/${slug}`,
  authors: () => "/authors",
  newAuthor: () => "/authors/new",
}
