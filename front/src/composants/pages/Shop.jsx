import React from "react";
import Hero from "../Hero/Hero";
import Populaire from "../Populaire/Populaire";
import Offers from "../Offers/Offers";
import NewCollection from "../NewCollection/NewCollection";
import NewsLetter from "../NewsLetter/NewsLetter";

function Shop (){
    return (
         <div>
             <Hero/>
             <Populaire/>
             <Offers/>
             <NewCollection/>
             <NewsLetter/>
        </div>
    )
   
}
export default Shop