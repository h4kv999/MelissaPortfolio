import { Headline } from "./Headline";
import { images } from "../../public/assets";
import { Fragment } from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Card } from "./Card";

export function Cards(){
    return(
        <Fragment>
            <Headline text="Your destiny"/>
            <div className="flex justify-center gap-4 border border-purple-100 px-4 py-8 rounded-md">
                <Card image={ images.cards.card1 }/>
                <Card image={ images.cards.card2 }/>
                <Card image={ images.cards.card3 }/>
            </div>
        </Fragment>
    )
}