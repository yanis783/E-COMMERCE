import React from "react";
function NewsLetter (){
    return (
        <div className="newsletter">
            <h1>Obtiens les offres exclusive sur ton mail</h1>
            <p>Abonne toi a notre News Letter pour etre a jour</p>
        <div>
            <input type="email" placeholder="Ton adresse mail" />
            <button>S'abonner</button>
        </div>
        </div>
    )
}
export default NewsLetter;