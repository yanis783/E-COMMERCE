import React, { createContext, useState } from "react";
import all_product from "../assets/data2.json"


// Cela permet de partager un state entre plusieur composant
export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for (let index = 0; index <all_product.length+1; index++) {
     cart[index] = 0;
        
    }
    return cart;
}
export  const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        
    };

    const removeFromToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    //fonctionne pas pour l'addition du total
    const getTotalCartAcount = () => {
        let totalAcount = 0;

        for(const item in contextValue.cartItems){

            if(cartItems[item]>0){
                let itemInfo = all_product.find((article) => article.id===Number(item))
                totalAcount += itemInfo.new_price * contextValue.cartItems[item]; 
            }
        }
        return totalAcount;   
    }

    const contextValue = {getTotalCartAcount,all_product,cartItems,addToCart,removeFromToCart};

    return(
        <ShopContext.Provider value={{contextValue}}>
            {props.children}
        </ShopContext.Provider>
    )
}
