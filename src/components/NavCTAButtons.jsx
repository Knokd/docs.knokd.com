import Link from 'next/link'
import clsx from 'clsx'

export function NavCTAButtons() {

return (
  <div className='flex gap-2'>
    <Link href="https://app.knokd.com/login" aria-label="Log In">
      <button className="nav-btn btn__outline hide-on-mobile">Log In</button>
    </Link>
    <Link href="https://www.knokd.ca/get-started" aria-label="Get Started">
      <button id='header-nav-get-started' className='nav-btn btn__primary text-white'>Get Started</button>
    </Link>
  </div>
  )
}