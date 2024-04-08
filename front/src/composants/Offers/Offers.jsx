import React from "react";
import hero_img from "../../assets/hero.png"
function Offers (){
    return (
        <div className="offers">
        <div className="offers-left">
            <h1>Exclusif</h1>
            <h1>Offert pour vous</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Visiter maintenant</button>
        </div>
        <div className="offers-right">
            <img src={hero_img} alt="" />
        </div>
        </div>
    )
}
export default Offers;