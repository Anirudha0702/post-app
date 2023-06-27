import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import {ImHome} from "react-icons/im"
import { FaUser } from "react-icons/fa"
import {TbLogin,TbLogout,TbNews} from "react-icons/tb"
import {SiFeedly} from "react-icons/si"
export const SideBar: React.FC = () => {
    const session = useSession()
    const user = session.data?.user

    return (
        <nav className="sticky top-0 px-10 py-4 ">
            <ul className="flex flex-col gap-4 whitespace-nowrap
        items-start">
                <li className="border rounded-full px-4 py-1  border-gray-600
            hover:bg-gray-600
            hover:border-gray-500  transition duration-150">
                    <Link href="/">
                        <div className="group flex items-center gap-1">
                            <ImHome className="text-2xl group-hover:fill-green-500"/>
                            <span className="hidden md:inline hover:text-green-500">Home</span>
                        </div>
                    </Link>
                </li>
                <li className="border rounded-full px-4 py-1 border-gray-600
            hover:bg-gray-600
            hover:border-gray-500  transition duration-150">
                    <Link href="/"><div className="group flex items-center gap-1">
                            <SiFeedly className="text-2xl group-hover:fill-green-500"/>
                            <span className="hidden md:inline hover:text-green-500">Feed</span>
                        </div></Link>
                </li>
                <li className="border rounded-full px-4 py-1 border-gray-600
            hover:bg-gray-600
            hover:border-gray-500  transition duration-150">
                    <Link href="/"><div className="group flex items-center gap-1">
                            <TbNews className="text-2xl group-hover:fill-green-500"/>
                            <span className="hidden md:inline hover:text-green-500">News</span>
                        </div></Link>
                </li>
                {
                    user != null && (
                        <li className="border rounded-full px-4 py-1 border-gray-600
            hover:bg-gray-600
            hover:border-gray-500  transition duration-150">
                    <Link href={`/profiles/${user?.id}`}><div className="group flex items-center gap-1">
                            <FaUser className="text-2xl group-hover:fill-green-500"/>
                            <span className="hidden md:inline hover:text-green-500">Profile</span>
                        </div></Link>
                </li>
                    )
                }

                {
                    user == null ? (<li className="border rounded-full px-4 py-1 border-gray-600
                    hover:bg-gray-600
                    hover:border-gray-500  transition duration-150">
                            <button onClick={() => void signIn()} className="flex items-center gap-1"><TbLogin className="text-2xl fill-green-500"/><span className="hidden md:inline text-green-500">Login</span></button>
                        </li>) : <li className="border rounded-full px-4 py-1 border-gray-600
                    hover:bg-gray-600
                    hover:border-gray-500  transition duration-150">
                            <button onClick={() => void signOut()} className="group flex items-center gap-1"> <TbLogout className="text-2xl  group-hover:fill-red-500"/><span className="hidden md:inline hover:text-red-500">Log Out</span></button>
                        </li>
                }

            </ul>
        </nav>
    )
}
