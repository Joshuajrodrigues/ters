import Link from "next/link"
import { ReactNode } from "react"



export const QuickLinks=({children,route}:{children:ReactNode,route:string})=>{
    return(
        <Link className="pr-2" href={route}>{children}</Link>
    )
}