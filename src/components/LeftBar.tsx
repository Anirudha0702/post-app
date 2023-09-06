import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import { env } from "~/env.mjs"
import Loading from "./Loading"
import Error from "next/error"
const LeftBar = () => {
  const url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${env.NEXT_PUBLIC_API_KEY}`
  const [news,setNews]=useState({title:""})
  const randomNumberGen=()=>{
    return Math.floor(Math.random()*10)
  }
  const getData=async()=>{
    try {
      const res=await axios.get(url)
      return res.data.articles
    } catch (error) {
      console.log(error)
    }
  }
  const{status,error,data:newsArticles}=useQuery({
    queryKey:['newsArticles'],
    queryFn:getData
  })
  if(status==='error')return <Error statusCode={404}/>
  if(status==='loading')return <Loading big={true}/>
  const randomNum=randomNumberGen();
  return (
    <div className="px-20">
      <p>
        {newsArticles[randomNum].title}
      </p>
    </div>
  )
}

export default LeftBar