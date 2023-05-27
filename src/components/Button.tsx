import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"


type ButtonProps={
    sm?:boolean
    gray?:boolean
    className?:string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>
const Button=({sm=false,gray=false,className="",...Props}):ButtonProps & JSX.Element=>{
    const sizeClass=sm?"px-2 py-1":"px-6 py-1 font-semibold"
    const colorClass=gray?"bg-gray-400 hover:bg-gray-400 focus-visible:bg-gray-300":"bg-indigo-400 hover:bg-indigo-400 focus-visible:bg-indigo-300"    
    return (
        <button className={`rounded-full transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 text-whitte 
        disabled:bg-gray-400 ${sizeClass} ${colorClass} ${className}`}{...Props}>
        </button>
    )
}
export default Button