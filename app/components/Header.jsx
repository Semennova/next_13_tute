import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>SEMEN_NOVA</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  )
}
