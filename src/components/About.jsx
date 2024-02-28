import { Fragment } from "react";
import { Headline } from "./Headline";
import { images } from "../../public/assets";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function About(){
    useGSAP(() => {
        gsap.fromTo(".content-box", {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            delay: 0.5,
            duration: 1,
            y: 0,
            ease: "power2.inOut"
        });
    })

    return(
        <Fragment>
            <Headline text="about"/>
            <div className="about flex gap-4 items-center max-md:flex-col border border-purple-100 p-4 rounded-md">
                <div className="content-box w-80">
                    <img src={ images.melissaIcon } alt="melissa art self" className="w-full rounded-full border-2 border-pink-400 p-2 "/>
                </div>
                <p className="content-box w-full text-purple-100 max-md:text-center">
                    <span className="text-pink-400 font-semibold italic">Melissa</span>, a 21-year-old <span className="italic">illustrator</span>, excels in artistic versatility, focusing on creating <span className="italic">illustrations for books</span> with both <span className="italic">dark and adorable</span> themes. Her talent shines in crafting images that capture the balance between the obscure and the enchanting. With a unique style, <span className="text-pink-400 font-semibold italic">Melissa</span> contributes to the atmosphere and narrative using her distinctive color palette and strokes to convey emotions visually. Her artistic expression stands out in the illustration world, providing readers with a captivating and memorable visual experience.
                </p>
            </div>
        </Fragment>
    )
}