import { images } from "../../public/assets/index.js";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Header(){
    useGSAP(() => {
        gsap.fromTo(".head", {
            opacity: 0,
            x: 50
        },
        {
            opacity: 1,
            delay: 1,
            x: 0,
            duration: 2,
            ease: "power2.inOut"
        });

        gsap.fromTo(".icon", {
            opacity: 0,
            y: 20
        },
        {
            opacity: 1,
            y: 0,
            delay: 2,
            duration: 2,
            ease: "power2.inOut"
        });

        gsap.fromTo(".name", {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            delay: 2,
            duration: 2,
            y: 0,
            ease: "power2.inOut"
        });

        gsap.fromTo(".desc", {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            delay: 2.5,
            duration: 2,
            y: 0,
            ease: "power2.inOut"
        })
    });

    return(
        <div>
            <div className="flex justify-between text-purple-100 head">
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
                <img src={ images.icon } alt="icon" className="icon w-48 rounded-md mb-2 max-md:w-40 max-[425px]:w-36"/>
                <h1 className="name text-9xl max-md:text-8xl max-[425px]:text-6xl text-pink-400 font-bold uppercase">melissa</h1>
                <p className="desc text-purple-100">A spooky illustrator</p>
            </div>
        </div>
    )
}