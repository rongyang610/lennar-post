import Link from 'next/link'

import Button from '@/components/Button'
import { NAVIGATION_ITEMS_LEFT } from '@/utils/navigation'

const DesktopNavigation = () => (
  <div className="ml-10 hidden w-full justify-between md:flex ">
    <ul className="items-center gap-8 md:flex">
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
            classNames="!bg-gray-600 !px-[17px] !py-[9px]"
          />
        </Link>
      </li>
    </ul>
  </div>
)

export default DesktopNavigation
