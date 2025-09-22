import Link from 'next/link'
import Image from 'next/image'

import { inter } from '../fonts'

const logo = '/images/logo.png'
const socialsIcons = {
  facebook: '/icons/facebook.svg',
  twitter: '/icons/twitter.svg',
  linkedin: '/icons/linkedin.svg',
}

export default function Footer() {
  return (
    <footer
      className=" text-white/75 font-medium p-10"
      style={{ backgroundColor: '#222C1D' }}
    >
      <div className="grid grid-cols-[2fr_1fr_2fr] gap-10 mb-10 mt-10">
        {/* Links */}
        <div className="flex flex-col gap-5 justify-center">
          <div className="flex items-center ">
            <Image src={logo} alt="logo" width={60} height={70} />

            <Link href="/" className="font-black text-3xl">
              Planto.
            </Link>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Midden */}
        <div className="flex flex-col gap-10">
          <p className="font-extrabold">Quick Link's</p>
          <div className=" flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Type's Of plants</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Privacy</Link>
          </div>
        </div>

        {/* Rechts */}
        <div className="flex flex-col gap-10">
          <p className="font-extrabold">For Every Update.</p>
          <div className="md:relative ">
            <input
              type="text"
              placeholder="Enter Email"
              className="border-white border rounded w-full p-3  "
            />
            <button
              className="uppercase bg-white font-bold p-2 rounded md:right-1 md:-translate-y-1/2 md:top-1/2 md:absolute "
              style={{ color: '#1B2316 ' }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Rij 2 - kolom 1 */}
        <div className="col-span-2 flex gap-10 uppercase font-extrabold items-center">
          <p>Fb</p>
          <p>Tw</p>
          <p>Li</p>
        </div>

        {/* Rij 2 - kolom 2 */}
        <div>
          <p>planto © all right reserve</p>
        </div>
      </div>
    </footer>
  )
}
