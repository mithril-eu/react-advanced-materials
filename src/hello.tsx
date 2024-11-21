import { useState } from "react"

export function Hello() {
  return <h1>Hello</h1>
}

export function App() {
  const [value, setValue] = useState("")

  return <Input value={value} onChange={(value) => setValue(value)} />
}

export function Input({
  value,
  onChange,
}: { value: string; onChange: (value: string) => void }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      // data-testid="input"
    />
  )
}
