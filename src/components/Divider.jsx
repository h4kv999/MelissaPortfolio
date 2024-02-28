import { FaSkull } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Divider(){
    useGSAP(() => {
        gsap.fromTo(".left-line", {
            opacity: 0,
            x: -30
        },
        {
            opacity: 1,
            x: 0,
            delay: 2,
            duration: 2,
            ease: "power3.inOut"
        });

        gsap.fromTo(".right-line", {
            opacity: 0,
            x: 30
        },
        {
            opacity: 1,
            x: 0,
            delay: 2,
            duration: 2,
            ease: "power3.inOut"
        });

        gsap.fromTo(".skull", {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            delay: 2.5,
            duration: 2,
            ease: "power3.inOut"
        });
    })

    return(
        <div className="flex items-center">
            <div className="left-line border border-purple-100 mr-2 w-full h-0 rounded-md"></div>
            <FaSkull className="skull text-5xl fill-purple-100"/>
            <div className="right-line border border-purple-100 ml-2 w-full h-0 rounded-md"></div>
        </div>
    )
}