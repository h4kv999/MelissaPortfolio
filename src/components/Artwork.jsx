import { Fragment } from "react";
import { images } from "../../public/assets";
import { Headline } from "./Headline";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Artwork(){
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
    });

    return(
        <Fragment>
            <Headline text="artwork"/>
            <div className="grid grid-cols-3 grid-rows-3 h-[1080px] justify-center items-center gap-2 border border-purple-100 p-4 rounded-md max-md:grid-cols-2 max-md:grid-rows-4">
                    <img src={ images.gallery.img1 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md"/>
                    <img src={ images.gallery.img2 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md"/>
                    <img src={ images.gallery.img3 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md max-md:row-start-2"/>
                    <img src={ images.gallery.img4 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-2"/>
                    <img src={ images.gallery.img5 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-2 max-md:row-start-3"/>
                    <img src={ images.gallery.img6 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-2 max-md:row-start-3"/>
                    <img src={ images.gallery.img7 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-3 max-md:row-start-4"/>
                    <img src={ images.gallery.img8 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-3 max-md:row-start-4"/>
                    <img src={ images.gallery.img9 } alt="Melissa artwork" className="content-box w-full h-full object-top object-cover rounded-md row-start-3 max-md:row-start-5 max-md:hidden"/>
            </div>
        </Fragment>
    )
}