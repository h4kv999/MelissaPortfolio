import { Fragment } from "react";
import { Headline } from "./Headline";
import { images } from "../../public/assets";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export function Contact(){
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
            <Headline text="contact"/>
            <div className="flex gap-4 border border-purple-100 p-4 rounded-md">
                <form action="https://formsubmit.co/byilustrapanencomendas@gmail.com" method="POST" className="content-box flex flex-col gap-4 w-full">
                <div className="content-box w-full flex flex-col">
                    <label className="text-purple-100">Name:</label>
                    <input placeholder="Your name here" name="name" type="text" required className="p-2 outline-none rounded-md bg-purple-100 text-zinc-800"/>
                </div>

                <div className="content-box w-full flex flex-col">
                    <label className="text-purple-100">E-mail:</label>
                    <input placeholder="Your e-mail here" type="email" name="email" required className="p-2 outline-none rounded-md resize-none bg-purple-100 text-zinc-800"/>
                </div>

                <div className="content-box w-full flex flex-col">
                    <label className="text-purple-100">Message:</label>
                    <textarea placeholder="Your message here" name="message" required className="p-2 outline-none rounded-md resize-none bg-purple-100 h-48 text-zinc-800"></textarea>
                </div>
                
                <input type="hidden" name="_subject" value="New Contact"/>
                <input type="text" name="_honey" className="hidden"/>
                <input type="hidden" name="_captcha" value="false"/>

                <button type="submit" className="content-box p-4 border text-purple-100 rounded-md hover:bg-purple-100 hover:text-zinc-800 transition">submit</button>
                <input type="hidden" name="_next" value="https://melissa-portfolio-six.vercel.app/thanks"/>

                </form>
                <div className="w-72">
                    <img src={ images.contactImg } className="content-box h-full object-cover rounded-md" alt=""/>
                </div>
            </div>
        </Fragment>
    )
}