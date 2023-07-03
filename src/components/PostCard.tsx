import Link from "next/link";
import { Post } from "~/types/types"
import ProfilePicture from "./ProfilePicture";
import LikeButton from "./LikeButton";

const handleDateFormat=Intl.DateTimeFormat(undefined,{dateStyle:'short'})
 const PostCard = ({id,user,content,createdAt,likedByUser,totalLikes}:Post) => {
  const liked=api.post.liked.useMutation()
  const handleLike=()=>{

  }
  return (
    <li className="flex gap-4 border px-4 py-4 mb-4 rounded-lg">
        <div className="flex place-items-center flex-col">
        <Link href={`/profiles/${user.id}`}>
                    <ProfilePicture className="rounded-none p-10" src={user.image}/>
                </Link>
                <LikeButton 
                onClick={handleLike}
                isLoading={liked.isLoading}
                likedByUser={likedByUser} 
                totalLikes={totalLikes}
                />
        </div>
        <div className=" flex flex-col w-full"><Link href={`/profiles/${user.id}`}>
          <div className="border-b-[0.09rem] w-fit font-semibold ">
            {user.name}
          </div>
        </Link>
        <div className="text-gray-400 italic break-words whitespace-pre-wrap">
          {content}
        </div>
        <div className="italic text-xs justify-end gap-1 flex">
          <span className="text-gray-500 not-italic"> Posted at : </span>
            <span className="text-gray-500">{handleDateFormat.format(createdAt)}</span>
        </div>
      </div>
    </li>
  )
}
export default PostCard;
