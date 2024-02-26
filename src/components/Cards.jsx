import { Headline } from "./Headline";
import { images } from "../../public/assets";
import { Fragment } from "react";

export function Cards(){
    return(
        <Fragment>
            <Headline text="Your destiny"/>
            <div className="flex gap-4 border border-purple-100 p-4 rounded-md">
                <div className="group h-[500px] w-96 perspective-1000">
                    <div className="relative h-full w-full rounded-xl transition-all duration-500 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img src={ images.cards.card1 } alt="" className="w-full h-fit" />
                        </div>
                        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] backface-hidden ">
                            <img src={ images.cards.card2 } className="w-full h-fit" alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="group h-[500px] w-96 perspective-1000">
                    <div className="relative h-full w-full rounded-xl transition-all duration-500 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img src={ images.cards.card1 } alt="" className="w-full h-fit" />
                        </div>
                        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] backface-hidden ">
                            <img src={ images.cards.card2 } className="w-full h-fit" alt="" />
                        </div>
                    </div>
                </div>

                <div className="group h-[500px] w-96 perspective-1000">
                    <div className="relative h-full w-full rounded-xl transition-all duration-500 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img src={ images.cards.card1 } alt="" className="w-full h-fit" />
                        </div>
                        <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] backface-hidden ">
                            <img src={ images.cards.card2 } className="w-full h-fit" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}