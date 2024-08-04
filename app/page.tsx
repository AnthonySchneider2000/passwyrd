"use client"

import { useState } from "react"
import PasswordStrengthBar from "react-password-strength-bar"

import { PasswordInput } from "@/components/ui/password-input"

export default function IndexPage() {
  const [password, setPassword] = useState("")

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-4">
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          />
        <PasswordStrengthBar password={password} />
      </div>
    </section>
  )
}
