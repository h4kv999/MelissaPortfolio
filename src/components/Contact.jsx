import { Fragment } from "react";
import { Headline } from "./Headline";

export function Contact(){
    return(
        <Fragment>
            <Headline text="contact"/>
            <form action="https://formsubmit.co/byilustrapanencomendas@gmail.com" method="POST" className="flex flex-col gap-4">
                <div className="w-full flex flex-col">
                    <label className="text-purple-100">Name:</label>
                    <input placeholder="Your name here" name="name" type="text" required className="p-2 outline-none rounded-md bg-purple-100 text-zinc-800"/>
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-purple-100">E-mail:</label>
                    <input placeholder="Your e-mail here" type="email" name="email" required className="p-2 outline-none rounded-md resize-none bg-purple-100 text-zinc-800"/>
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-purple-100">Message:</label>
                    <textarea placeholder="Your message here" name="message" required className="p-2 outline-none rounded-md resize-none bg-purple-100 h-48 text-zinc-800"></textarea>
                </div>
                
                <button type="submit" className="p-4 border text-purple-100 rounded-md hover:bg-purple-100 hover:text-zinc-800 transition">submit</button>

                <input type="hidden" name="_subject" value="New Contact"/>
                <input type="text" name="_honey" className="hidden"/>
                <input type="hidden" name="_captcha" value="false"/>
            </form>
        </Fragment>
    )
}