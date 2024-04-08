import React from "react";
import arrow_icon from "../../assets/arrow.png"
function ArticleSeul (props){
  const {article} = props
    return (

        <div className="articleseul">
            HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{article.category} <img src={arrow_icon} alt="" /> {article.name}

    </div>
        )
}
export default ArticleSeul;