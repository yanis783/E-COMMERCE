import React from "react";
import new_collection from "../../assets/data.json"
import new_collection2 from "../../assets/data2.json"
import Item from "../Item/Item";
function NewCollection (){
    return (
        <div className="new-collection">
        <h1>Nouvelle collection</h1>
        <hr />
        <div className="collections">
            {new_collection2.filter(function(item){return item.category=="NewCollection"}).slice(0,8).map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
    )
}
export default NewCollection;