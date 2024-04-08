import React ,{useContext} from "react";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import ArticleSeul from "../Onclick/Articleseul";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescripttionBox from "../DescriptionBox/DescriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function Produit (){
    const { produitId} = useParams()
    const { contextValue }=useContext(ShopContext)
    const article = contextValue.all_product.find(function(item){
        return item.id == produitId
    })
    
    return (
        <div>
       <ArticleSeul article={article} />
       <ProductDisplay article={article}/>
       <DescripttionBox/>
       <RelatedProducts/>
    </div>
    )
    
    
}
export default Produit