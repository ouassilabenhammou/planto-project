import Link from 'next/link'
import Image from 'next/image'

import { inter } from '../fonts'

const logo = '/images/logo.png'

const icons = {
  dropdown: '/icons/polygon.svg',
  zoeken: '/icons/zoeken.svg',
  winkelmand: '/icons/winkelmand.svg',
  menu: '/icons/menu.svg',
}

export default function Header() {
  return (
    <header className="text-white/75 ">
      <nav className="mx-auto flex max-w-8xl justify-between p-10 py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Planto logo" width={40} height={40} />
          <Link
            href="/"
            className={`${inter.className} antialiased font-black text-[22px]`}
          >
            Planto.
          </Link>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center justify-between gap-10 lg:gap-20 text-[18px] font-medium">
          <Link href="/">Home</Link>

          <div className="flex items-center gap-2">
            <Link href="/">Plants Type</Link>{' '}
            <img
              src={icons.dropdown}
              alt="dropdown icon"
              className="opacity-75"
            />
          </div>

          <Link href="/">More</Link>

          <Link href="/">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-10 md:gap-15 opacity-75">
          <img src={icons.zoeken} alt="zoeken icon" width={24} height={24} />
          <img
            src={icons.winkelmand}
            alt="winkelmand icon"
            width={24}
            height={24}
          />
          <img src={icons.menu} alt="menu icon" width={29} height={11} />
        </div>
      </nav>
    </header>
  )
}
