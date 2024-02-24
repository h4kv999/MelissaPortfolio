import { images } from "../../public/assets";

export function Main(){
    return(
        <div className="h-screen">
            <div>
                <img src={ images.gallery.img1 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img2 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img3 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img4 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img5 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img6 } alt="" className="w-full"/>
            </div>

            <div>
                <img src={ images.gallery.img7 } alt="" className="w-full"/>
            </div>
        </div>
    )
}