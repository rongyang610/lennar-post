'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Button from '@/components/Button'
import { NAVIGATION_ITEMS_LEFT } from '@/utils/navigation'

const MobileNavigation = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const animationClasses = show
    ? 'top-0 visible opacity-1 duration-500'
    : 'top-[-40vh] invisible opacity-0 duration-300'

  return (
    <div className="flex md:hidden">
      <Image
        src="/hamburger.svg"
        alt="hamburger menu"
        width={24}
        height={24}
        onClick={() => setShow(true)}
        className="hover:cursor-pointer"
      />
      {show && (
        <div
          className="fixed left-0 top-0 z-10 h-screen w-full bg-gray-500 opacity-75"
          onClick={handleClose}
        />
      )}
      <div
        className={`fixed left-0 z-20 w-full px-1 pt-1 transition-all ease-in-out ${animationClasses}`}
      >
        <div className="flex flex-col rounded-lg bg-white px-5 pb-6 pt-4">
          <div className="mb-8 flex w-full justify-between">
            <Image alt="logo" src="/logo.svg" width={35} height={32} />
            <Image
              alt="close"
              src="/close.svg"
              width={24}
              height={24}
              onClick={handleClose}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="mb-8 flex flex-col gap-5">
            {NAVIGATION_ITEMS_LEFT.map(({ slug, title }, key) => (
              <Link
                href={slug}
                key={slug + title + key}
                className="w-fit text-gray-700"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="mx-1 flex flex-col gap-6">
            <Button text="Start free trial" />
            <div className="flex justify-center">
              <span className="text-gray-500">Existing customer?</span>
              <Link href="/login" className="ml-1 font-medium text-gray-900">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavigation
