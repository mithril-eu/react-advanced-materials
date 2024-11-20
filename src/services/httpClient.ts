import axios from "axios"

// Access token from BE
// const token = "fsdjnfaočdi nfsdnfljadnsjdsnfsdpaf"

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // Additional setup of the config, like headers
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${token}`,
  // },
})

// Usage of interceptors with axios
// We can intercept each Request and Response
// and then use onFullfield or onRejected callback
// to handle different scenarios
// client.interceptors.response.use(undefined, (error) => {
//   const status = error.response.status
//   if (status === 401 || status === 403) {
//     // Show user message
//     window.location.href = paths.login()
//   }
//   return Promise.reject(error)
// })
