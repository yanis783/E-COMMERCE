import React from "react";
import data_product from "../../assets/data.json"
import data_product2 from "../../assets/data2.json"
import Item from "../Item/Item.jsx"
function Populaire (){
    return (

        <div className="populaire">
        <h1>POPULAIRE CHEZ LES HOMMES</h1>
        <hr />
        <div className="populaire-item">
            {data_product2.filter(function(item){return item.category== "New"}).slice(0,4).map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
        )
}
export default Populaire