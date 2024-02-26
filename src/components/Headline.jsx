import { FaSkull } from "react-icons/fa6";

export function Headline(props){
    return(
        <div className="flex items-center justify-center gap-2">
            <FaSkull className="fill-purple-100"/><h3 className="uppercase text-4xl font-bold text-purple-100">{ props.text }</h3><FaSkull className="fill-purple-100"/>
        </div>
    )
}
