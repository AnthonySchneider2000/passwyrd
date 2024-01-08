"use client"

import { useState } from "react"
import Link from "next/link"
import PasswordStrengthBar from "react-password-strength-bar"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-4">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <PasswordStrengthBar password={password} />
        <div className="items-top flex space-x-2">
          <Checkbox
            id="displayPasswordCheckbox"
            onCheckedChange={() => setShowPassword(!showPassword)}
          >
            Show Password
          </Checkbox>
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="displayPasswordCheckbox"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show Password
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
