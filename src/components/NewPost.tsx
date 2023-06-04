import React, { FormEvent,useState } from 'react'
import Button from './Button'
import { api } from '~/utils/api';
 const NewPost = () => {
  const [input,setInput]=useState("");
  const createPost=api.post.create.useMutation({
    onSuccess:post=>{
      setInput('');
    }
  })
  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault()
    createPost.mutate({content: input})
}
  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 -y-2" onSubmit={handleSubmit}>
        <div className=" flex gap-4 border border-gray-600 rounded-lg">
            <textarea  className='overflow-hidden text-lg flex-grow 
            py-4 px-10 outline-none
            resize-none
             bg-transparent' placeholder='Anything wanna say...' value={input} onChange={(e)=>setInput(e.target.value)}></textarea>
        </div>
        <div className="flex items-center gep-2">
          <Button className='self-start mb-2' disabled={input.length>200?true:false}>SEND</Button>
          <p className={input.length>200?"text-red-500":""}>{input.length}</p>/200
        </div>

    </form>
  )
}
export default NewPost