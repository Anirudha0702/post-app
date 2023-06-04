import InfiniteScroll from 'react-infinite-scroll-component'
type AllPostQueryProps={
  isLoading:boolean,
  isError:boolean,
  hasMore: boolean|undefined,
  newPosts:()=>Promise<any>
  posts:post[]|undefined
}
type post={ 
  id:string,
  content:string,
  createdAt:Date,
  totalLikes:number,
  likedByUser:boolean,
  user:{
    image:string|null,
    id:string|null,
    name:string|null
  }
}
const AllPosts = ({posts,isError,isLoading,hasMore,newPosts}:AllPostQueryProps) => {
    if(isLoading){
      return <h1>Loading....</h1>
    }
    if(isError)return <h1>Error 404(NOt Found)</h1>
    if(posts==null || posts.length===0){
      <div className="p-4 my-4 text-center text-xl text-gray-300 bg-gray-600"> No posts as of Now</div>
    }
    return <>
      <ul>
        <InfiniteScroll 
        next={newPosts}
        loader={`Matte kudasaai`}
        hasMore={hasMore!}
        dataLength={posts.length}>
          {
             posts.map(post =>{
              return <div key={post.id}>
                  {post.user.name}
                  {post.content} 
              </div>
            })
          }
        </InfiniteScroll>
      </ul>
    </>
}
export default AllPosts;