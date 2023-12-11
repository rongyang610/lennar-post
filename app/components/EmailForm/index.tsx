'use client'
import { useState } from 'react'

import Button from '@/components/Button'
import { isValidEmail } from '@/utils/is-valid-email'

const EmailForm = () => {
  const [email, setEmail] = useState('')
  const [isInvalidEmail, setIsInvalidEmail] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // upload email

    if (!isValidEmail(email)) {
      setIsInvalidEmail(true)
    }

    setEmail('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isInvalidEmail) {
      setIsInvalidEmail(false)
    }

    setEmail(e.target.value)
  }

  return (
    <div>
      <p className="text-red-500 text-sm mt-1 h-[20px] mb-1">
        {isInvalidEmail ? 'Please enter a valid email address.' : ''}
      </p>
      <form
        className="flex md:flex-row flex-col gap-3 sm:gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label
            className="absolute"
            htmlFor="email"
            style={{ clip: 'rect(0, 0, 0, 0)' }}
          >
            Email
          </label>
          <input
            className="focus:outline-none text-black rounded-md px-4 py-3 w-full md:w-[393px]"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            value={email}
          />
        </div>
        <Button type="submit" text="Start free trial" />
      </form>
    </div>
  )
}

export default EmailForm
