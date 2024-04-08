import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

function CartItems (){
    // all_product,cartItems,removeFromCart
    const {contextValue } = useContext(ShopContext)

    return (

        <div className="cartitems">
        <div className="cartitems-format-main">
        <p>Products</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Quantité</p>
        <p>Total</p>
        <p>Enlever</p>
        </div>
        <hr />
        {contextValue.all_product.map((item, index)=>{
        if(contextValue.cartItems[item.id]>0)
        {
            return (
                <div key={index}>

                <div className="cartitems-format cartitems-format-main">
                    <img src={item.image} alt="" className="carticon-product-icon"/> 
                    <p>{item.name}</p> 
                    <p>${item.new_price}</p>
                    <button className="cartitems-quantity">{contextValue.cartItems[item.id]}</button>
                    <p>${item.new_price*contextValue.cartItems[item.id]}</p>
                    <img  className="cartitems-remove-icon" src={remove_icon} onClick={()=>{
                        contextValue.removeFromToCart(item.id)}} alt="" /> 
                </div>
                <hr />
              </div>
            )
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Panier totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${contextValue.getTotalCartAcount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping free</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${contextValue.getTotalCartAcount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>Entre ton code promo</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItems;