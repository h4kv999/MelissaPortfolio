import { images } from "../../public/assets";

export function Thanks(){
    return(
        <div className="border border-purple-100 p-4 rounded-md flex flex-col text-purple-100 max-w-2xl m-auto">
            
            <div>

            </div>
            <div className="flex gap-4">
                <div className="h-84">
                    <img src={ images.thanksImg } alt="" className="rounded-md object-cover w-full h-full"/>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="mb-4 text-xl font-semibold">Your email has been sent <span className="text-pink-400">successfully</span>!</h3>
                    <p>
                        Thank you for sending the email. Thank you for your message and I look forward to continuing our communication. Have a great day!
                    </p>
                </div>
            </div>
        </div>
    )
}