import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import dropdown_icon from "../../assets/dropdown_icon.png";
import all_product2 from "../../assets/data2.json"
import Item from "../Item/Item";


function Categorie (props){
    const {contextValue} = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img className="banniere" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span>
                    Voir 1 a 12 </span> 
                    out of 12 products
                     </p>
                    <div className="shopcategory-sort">
                        Sort by <img className="dropdown" src={dropdown_icon} alt="" />
                    </div>
            </div>
            <div className="shopcategory-products">
            {contextValue.all_product.map((item,i) => {
            if(props.category== item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
            </div>
            <div className="shopcategory-loadmore">
                Bientot...
            </div>
    </div>
        )
}
export default Categorie