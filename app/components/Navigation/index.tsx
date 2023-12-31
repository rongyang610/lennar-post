import Image from 'next/image'
import Link from 'next/link'

import DesktopNavigation from './Desktop'
import MobileNavigation from './Mobile'

const Navigation = () => (
  <nav className="relative mb-10 flex items-center justify-between md:mb-0">
    <Link href="/">
      <Image alt="logo" src="/logo.svg" width={44} height={40} />
    </Link>
    <DesktopNavigation />
    <MobileNavigation />
  </nav>
)

export default Navigation
