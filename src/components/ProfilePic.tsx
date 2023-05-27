import Image from "next/image"
type ProfilePicProps={
  src?:string |null
  className?:string
}
const ProfilePic = ({src,className}:ProfilePicProps) => {
  return (
    <div className={`relative 
    h-11 w-11 overflow-hidden
     rounded-full ${className}`}>
      {src==null?null:<Image src={src} alt="profile" quality={100} fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>}
    </div>
  )
}
export default ProfilePic;