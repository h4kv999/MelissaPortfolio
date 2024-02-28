import { images } from "../../public/assets";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Resume(){
    useGSAP(() => {
        gsap.fromTo(".banner", {
            opacity: 0,
            y: -40
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 2,
            ease: "power3.inOut"
        });

        gsap.fromTo(".text-content", {
            opacity: 0,
            y: 40
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 2,
            ease: "power3.inOut"
        });

        gsap.fromTo(".line", {
            opacity: 0,
            x: 40
        },
        {
            opacity: 1,
            x: 0,
            duration: 2,
            delay: 2,
            ease: "power3.inOut"
        });
    })

    return(
        <div className="flex items-center flex-col">
            <div className="line flex flex-wrap justify-around border border-purple-100 rounded-md w-full p-4">
                <div className="h-64 max-md:h-52 w-full">
                    <img src={ images.hero } alt="" className="banner w-full h-full object-cover object-[65%35%] rounded-md"/>
                </div>
                <p className="text-content text-purple-100 mt-4 text-center">
                    Melissa, an artist of adorable terror, creates works that stand out in the universe of darkness but with an irresistibly cute touch. Her brush dances on the canvas, bringing to life shadowy creatures that, surprisingly, seem more lovable than terrifying.
                </p>
            </div>
        </div>
    )
}