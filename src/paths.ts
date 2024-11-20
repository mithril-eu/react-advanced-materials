export const paths = {
  dashboard: () => "/",
  invoices: () => "/invoices",
  invoice: (id = ":id") => `/invoices/${id}`,
  // invoiceSomething: (id = ":id", slug = ":slug") => `/invoices/${id}/something/${slug}`,
  customers: () => "/customers",
}
