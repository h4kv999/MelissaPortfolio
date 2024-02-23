import { FaSkull } from "react-icons/fa6";

export function Divider(){
    return(
        <div className="flex items-center">
            <div className="border border-purple-100 mr-2 w-full h-0 rounded-md"></div>
            <FaSkull className="text-5xl fill-purple-100"/>
            <div className="border border-purple-100 ml-2 w-full h-0 rounded-md"></div>
        </div>
    )
}