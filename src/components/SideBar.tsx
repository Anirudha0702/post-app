import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

export const SideBar :NextPage= () => {
  return (
    <nav className='sticky top-0 px-2 py-4'>
        <ul className='border border-red-500 flex flex-col gap-4 whitespace-nowrap items-start'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/profiles/">Profile</Link>
            </li>
            <li>
                <Link href="/">Feed</Link>
            </li>
            <li>
                <Link href="/">News</Link>
            </li>
        </ul>
    </nav>
  )
}
