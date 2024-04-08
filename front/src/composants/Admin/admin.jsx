import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function Admin (){
    
    const {contextValue } = useContext(ShopContext)

    return (

        <div>
        <h1>Gestion du catalogue</h1>
        <table>
        <thead>
                <tr>
                    <th className="name">Titre</th>
                    <th className="category">category</th>
                    <th className="img">image</th>
                    <th className="new_price">nouveau prix</th>
                    <th className="old_price">ancien prix</th>
                    <th>action</th>

                </tr>
            </thead>
            <tbody>
                {contextValue.all_product.map(function(produit,id){
                    return(
                        <tr key={id}>
                            <td>{produit.name}</td>
                            <td>{produit.category}</td>
                            <td>
                                <img src={produit.images[0]} alt="" />
                            </td>
                            <td>{produit.new_price}</td>
                            <td>{produit.old_price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
        ) 
}
export default Admin;