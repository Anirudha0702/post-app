import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export const SideBar :NextPage= () => {
const session=useSession();
const user=session.data?.user;

  return (
    <nav className='sticky top-0 px-10 py-4 '>
        <ul className=' flex flex-col gap-4 whitespace-nowrap items-start'>
            <li className=" border rounded-full
              px-4 py-1 border-gray-500
               hover:bg-gray-600
                hover:border-gray-500
                  transition duration-150">
                <Link href="/">Home</Link>
            </li>

            {
                user!=null &&(
                    <li className=" border rounded-full
              px-4 py-1 border-gray-500
               hover:bg-gray-600
                hover:border-gray-500
                 transition duration-150">
                <Link href={`/profiles/${user?.id}`}>{user.name}</Link>
            </li>
                )
            }
            {
                user==null?(
                    <li className=" border rounded-full
              px-4 py-1 border-gray-500
               hover:bg-gray-600
                hover:border-gray-500
                 transition duration-150">
                <button onClick={()=>void signIn()}>Login</button>
            </li>
                ):(
                <li className=" border rounded-full
                px-4 py-1 border-gray-500
                 hover:bg-gray-600
                  hover:border-gray-500
                   transition duration-150">
                  <button onClick={()=> void signOut()}>Log out</button></li>
                  )
            }
            <li className=" border rounded-full
              px-4 py-1 border-gray-500
               hover:bg-gray-600
                hover:border-gray-500
                  transition duration-150">
                <Link href="/">Feed</Link>
            </li>
            <li className=" border rounded-full
              px-4 py-1 border-gray-500
               hover:bg-gray-600
                hover:border-gray-500
                  transition duration-150">
                <Link href="/">News</Link>
            </li>
        </ul>
    </nav>
  )
}
