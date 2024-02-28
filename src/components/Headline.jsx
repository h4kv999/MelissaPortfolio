import { FaSkull } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Headline(props){
    useGSAP(() => {
        gsap.fromTo(".left-skull", {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            delay: 0.1,
            duration: 1,
            y: 0,
            ease: "power2.inOut"
        });

        gsap.fromTo(".text-conte", {
            opacity: 0,
            y: -50
        },
        {
            opacity: 1,
            delay: 0.5,
            duration: 1,
            y: 0,
            ease: "power2.inOut"
        });

        gsap.fromTo(".right-skull", {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            delay: 0.2,
            duration: 1,
            y: 0,
            ease: "power2.inOut"
        });
    });

    return(
        <div className="flex items-center justify-center gap-2">
            <FaSkull className="left-skull fill-purple-100"/><h3 className="text-conte content-box uppercase text-4xl font-bold text-purple-100">{ props.text }</h3><FaSkull className="right-skull fill-purple-100"/>
        </div>
    )
}
