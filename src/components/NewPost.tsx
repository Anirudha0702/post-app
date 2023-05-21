import React from 'react'
import Button from './Button'
 const NewPost = () => {
  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 -y-2">
        <div className=" flex gap-4">
            <textarea  className='overflow-hidden text-sm 
            p-4 outline-none
            resize-none
             flex-grow
             bg-transparent' placeholder='Anything wanna say...'></textarea>
        </div>
        <Button className='self-start mb-2'>POST</Button>

    </form>
  )
}
export default NewPost