import { RiEyeCloseLine } from "react-icons/ri";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export function Card(props){
    return(
        <div className="group h-[482px] w-[270px] perspective-1000">
                    <div className="relative h-full w-full transition-all duration-500 transform-style-3d group-hover:[transform:rotateY(180deg)] group-hover:[-webkit-transform:rotateY(180deg)]">
                        <div className="absolute inset-0 h-full">
                            <div className="w-full h-full object-cover p-4 rounded-md border border-purple-100 border-opacity-25">
                                <div className="w-full p-4 h-full border bg-zinc-800 flex items-center justify-center border-opacity-75 border-purple-100 rounded-md">
                                    <div className="w-full h-full flex-col p-4 flex items-center justify-between border border-opacity-75 border-purple-100 rounded-full">
                                        <FaRegSun className="fill-purple-100 text-xl opacity-80"/>
                                        <div className="flex flex-col items-center">
                                            <GoDotFill className="fill-purple-100 opacity-20"/>
                                            <GoDotFill className="fill-purple-100 opacity-40"/>
                                            <GoDotFill className="fill-purple-100 opacity-60"/>
                                            <RiEyeCloseLine className="fill-purple-100 text-7xl max-sm:text-5xl opacity-80"/>
                                            <GoDotFill className="fill-purple-100 opacity-60"/>
                                            <GoDotFill className="fill-purple-100 opacity-40"/>
                                            <GoDotFill className="fill-purple-100 opacity-20"/>
                                        </div>
                                        <FaRegMoon className="fill-purple-100 text-xl opacity-80"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 h-full w-full text-center p-1 rounded-md [transform:rotateY(180deg)] backface-hidden ">
                            <img src={ props.image } className="w-full h-full object-cover rounded-md" alt="" />
                        </div>
                    </div>
                </div>
    )
}