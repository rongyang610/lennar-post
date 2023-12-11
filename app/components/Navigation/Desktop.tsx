import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import { NAVIGATION_ITEMS_LEFT } from '@/utils/navigation'

const DesktopNavigation = () => (
  <div className="hidden md:flex justify-between w-full ml-10 ">
    <ul className="gap-8 items-center md:flex">
      {NAVIGATION_ITEMS_LEFT.map(({ slug, title }, key) => (
        <li key={slug + key}>
          <Link href={slug} className="hover:underline">
            {title}
          </Link>
        </li>
      ))}
    </ul>
    <ul className="flex items-center gap-6">
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link href="/signup">
          <Button
            text="Start free trial"
            classNames="bg-[#4B5563] px-[17px] py-[9px]"
          />
        </Link>
      </li>
    </ul>
  </div>
)

export default DesktopNavigation
