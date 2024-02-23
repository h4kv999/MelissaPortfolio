import { images } from "../../public/assets";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export function Header(){
    return(
        <div>
            <div className="flex justify-between text-purple-100">
                <div>
                    <p>spooky</p>
                    <p>horror</p>
                </div>
                <div>
                    <a href="https://www.instagram.com/byilustrapan/" className="flex items-center gap-1 hover:text-violet-500 transition"><FaInstagram/>Instagram</a>
                    <a href="mailto:byilustrapanencomendas@gmail.com" className="flex items-center gap-1 hover:text-violet-500 transition"><MdOutlineMailOutline/>Email</a>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8">
                <img src={ images.icon } alt="icon" className="w-48 rounded-md max-md:w-40"/>
                <h1 className="text-9xl max-md:text-8xl text-pink-400 font-bold uppercase">melissa</h1>
                <p className="text-purple-100">A spooky illustrator</p>
            </div>
        </div>
    )
}