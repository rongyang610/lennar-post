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
          className="fixed opacity-75 h-screen z-10 top-0 left-0 w-full bg-[#6B7280]"
          onClick={handleClose}
        />
      )}
      <div
        className={`fixed w-full z-20 px-1 pt-1 transition-all ease-in-out left-0 ${animationClasses}`}
      >
        <div className="flex flex-col px-5 pt-4 pb-6 bg-white rounded-lg">
          <div className="flex justify-between w-full mb-8">
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
          <div className="flex flex-col gap-5 mb-8">
            {NAVIGATION_ITEMS_LEFT.map(({ slug, title }, key) => (
              <Link
                href={slug}
                key={slug + title + key}
                className="text-[#374151] w-fit"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <Button text="Start free trial" />
            <div className="flex justify-center">
              <span className="text-[#6B7280]">Existing customer?</span>
              <Link href="/login" className="text-[#111827] ml-1">
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
