import Image from 'next/image'
import Link from 'next/link'

import DesktopNavigation from './Desktop'
import MobileNavigation from './Mobile'

const Navigation = () => (
  <nav className="flex justify-between items-center mr-1 sm:px-1">
    <Link href="/">
      <Image alt="logo" src="/logo.svg" width={44} height={40} />
    </Link>
    <DesktopNavigation />
    <MobileNavigation />
  </nav>
)

export default Navigation
