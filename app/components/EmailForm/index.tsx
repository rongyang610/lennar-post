'use client'
import { useState } from 'react'

import Button from '@/components/Button'

const EmailForm = () => {
  const [email, setEmail] = useState<string>()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // upload email
    setEmail('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
    <form
      className="flex sm:flex-row flex-col gap-3 sm:gap-5"
      onSubmit={handleSubmit}
    >
      <input
        className="focus:outline-none text-black rounded-md px-4 py-3 w-full sm:w-[393px]"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      <Button type="submit" text="Start free trial" />
    </form>
  )
}

export default EmailForm
