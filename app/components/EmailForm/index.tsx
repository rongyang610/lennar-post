'use client'
import { useMutation } from '@apollo/client'
import { useMemo, useState } from 'react'

import Button from '@/components/Button'
import { CREATE_USER } from '@/graphql'
import { CreateUserInput, CreateUserResponse } from '@/graphql/types'
import {
  INITIAL_EMAIL_MESSAGE_STATUS_STATE,
  isValidEmail,
} from '@/utils/email-form'

const EmailForm = () => {
  const [createUser, { data, error, loading }] = useMutation<
    CreateUserResponse,
    CreateUserInput
  >(CREATE_USER)
  const [email, setEmail] = useState('')
  const [emailMessageStatus, setEmailMessageStatus] = useState(
    INITIAL_EMAIL_MESSAGE_STATUS_STATE
  )

  const { buttonBgColor, buttonText } = useMemo(() => {
    if (emailMessageStatus.isSuccess)
      return {
        buttonBgColor: '!bg-green-400',
        buttonText: 'Sucesss!',
      }

    if (loading)
      return {
        buttonBgColor: '!bg-gray-700',
        buttonText: 'Loading...',
      }

    return { buttonBgColor: '', buttonText: 'Start free trial' }
  }, [emailMessageStatus.isSuccess, loading])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      return setEmailMessageStatus(state => ({
        ...state,
        isSuccess: true,
        text: `Successfully started your free 14-day trial!`,
      }))
    }

    try {
      await createUser({
        variables: {
          input: {
            email,
            name: 'test',
            username: 'testing',
          },
        },
      })
      if (data) {
        setEmailMessageStatus(state => ({
          ...state,
          isSuccess: true,
          text: `Successfully started your free 14-day trial!`,
        }))
      }
    } catch (e) {
      setEmailMessageStatus(state => ({
        ...state,
        isError: true,
        text: 'Failed to register your email, please try again later.',
      }))
    }

    setEmail('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { isError, isSuccess, text } = emailMessageStatus
    if (!!text && (isError || isSuccess)) {
      setEmailMessageStatus(INITIAL_EMAIL_MESSAGE_STATUS_STATE)
    }

    setEmail(e.target.value)
  }

  return (
    <div>
      <p
        className={`${
          emailMessageStatus.isSuccess ? 'text-green-400' : 'text-red-500'
        } mb-1 mt-1 h-[20px] text-sm`}
      >
        {emailMessageStatus.text}
      </p>
      <form
        className="flex flex-col gap-3 sm:gap-5 md:flex-row"
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
            className="w-full rounded-md px-4 py-3 text-black focus:outline-none md:w-[393px]"
            id="email"
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            value={email}
            required
          />
        </div>
        <Button classNames={buttonBgColor} type="submit" text={buttonText} />
      </form>
    </div>
  )
}

export default EmailForm
