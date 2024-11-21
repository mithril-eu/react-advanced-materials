export const paths = {
  login: () => "/login",
  dashboard: () => "/dashboard",
  books: () => "/dashboard/books",
  invoice: (id = ":id") => `/dashboard/invoices/${id}`,
  // invoiceSomething: (id = ":id", slug = ":slug") => `/invoices/${id}/something/${slug}`,
  authors: () => "/dashboard/authors",
  newAuthor: () => "/dashboard/authors/new",
}
