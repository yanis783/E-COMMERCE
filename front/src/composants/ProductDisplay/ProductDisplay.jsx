import React from "react";
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function ProductDisplay (props){
    const{article} = props;
    const{contextValue} = useContext(ShopContext);
    return (

        <div className="productdisplay">
            <div className="productdisplay-left">
                {article.images ?  <>
                    <div className="productdisplay-img-list">
                <img src={article.images[0]} alt="" />
                <img src={article.images[1]} alt="" />
                <img src={article.images[2]} alt="" />
                <img src={article.images[3]} alt="" />
              </div>
              <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={article.images[0]} alt="" />
              </div>
                
                </> : <>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={article.image} alt="" />
                </div>
                </>}
              
            </div>
            <div className="productdisplay-right">
                <h1>{article.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon}alt="" />
                <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${article.old_price}</div>
                    <div className="productdisplay-right-price-new">${article.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aliquid libero eius earum maiores at vitae 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>2XL</div>
                    </div>
                </div>
                <button onClick={()=>{contextValue.addToCart(article.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category </span>Enfant, T-shirt, Qammis</p>
                <p className="productdisplay-right-category"><span>Tags </span>Modern, Latest</p>
            </div>
    </div>
)
}
export default ProductDisplay;