import { useAuth } from "@/components/ProtectedRoute.tsx"
import { LoginData } from "@/providers/AuthProvider"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

// Example of Zod schema for validation
const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export function LoginPage() {
  const { handleSubmit, register, onSubmit, errors } = useLoginPage()

  return (
    <>
      <h1>Login page</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "150px",
        }}
      >
        <input {...register("username", { required: true })} />
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Obavezno je..",
            },
            minLength: {
              value: 6,
              message: "Treba bit barem 6",
            },
          })}
        />
        {errors.password && (
          <small style={{ fontSize: "12px", color: "red" }}>
            {errors.password.message}
          </small>
        )}
        <button>Login in</button>
      </form>
    </>
  )
}

function useLoginPage() {
  const { login } = useAuth()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<LoginData>()

  const onSubmit: SubmitHandler<LoginData> = (data) => {
    loginSchema.parse(data) // example of Zod schema usage
    // POST data
  }

  return { login, handleSubmit, errors, register, onSubmit }
}
