import { Headline } from "./Headline";
import { images } from "../../public/assets";
import { Fragment } from "react";
import { Card } from "./Card";

export function Cards(){
    return(
        <Fragment>
            <Headline text="Your destiny"/>
            <p className="text-purple-100 text-center">Turn the cards over and discover what destiny has in store for you.</p>
            <div className="flex justify-center gap-4 border border-purple-100 px-4 py-8 rounded-md">
                <Card image={ images.cards.card1 }/>
                <Card image={ images.cards.card2 }/>
                <Card image={ images.cards.card3 }/>
            </div>
        </Fragment>
    )
}