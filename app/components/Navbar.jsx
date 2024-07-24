import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import {Lilita_One} from 'next/font/google'
// import {AdminIcon} from './Icons'

const font = Lilita_One({weight: '400', subsets: ['latin']})

const Navbar = () => {
  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href='/'>
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            The&nbsp;
            <span className='text-pink-500'>Burke Edit</span>
          </div>
        </Link>
        <div className='flex gap-4 items-center'>
          <ThemeSwitch />
          <Link href='/studio' className='text-xs text-pink-500'>
            ADMIN
            {/* <AdminIcon /> */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
