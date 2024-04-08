import logo from "../../assets/logo1.png"
import cart from "../../assets/cart_icon.png"
import { useState, useContext, useRef } from "react"
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../../assets/dropdown_icon.png"

function Header (){
    const{contextValue} = useContext(ShopContext);
   const [bar,setBar] = useState("shop");

   const menuRef = useRef();

   const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
   }

    function total(){
        let resultat = 0 ;
        for(let i in contextValue.cartItems){
            resultat += contextValue.cartItems[i]
        
        }
        return resultat

    }

    return (
        
        <div className="entete">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SUNNAH-STORE</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setBar("shop")}}> <Link style={{textDecoration: 'none'}} to='/' >Shop</Link> {bar==="shop"? <hr />:<></> }</li>
                <li onClick={()=>{setBar("hommes")}}> <Link style={{textDecoration: 'none'}} to='/hommes'>Homme</Link> {bar==="hommes"? <hr />:<></> }</li>
                <li onClick={()=>{setBar("enfants")}}> <Link style={{textDecoration: 'none'}} to='/enfants'>Enfant</Link> {bar==="enfants"? <hr />:<></> }</li>
                <li onClick={()=>{setBar("accessoires")}}> <Link style={{textDecoration: 'none'}} to='/accessoires'>Accessoires</Link> {bar==="accessoires"? <hr />:<></> }</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/connexion'><button>Connexion</button></Link>
                {/* <Link to='/admin'>Admin</Link> */}
                <Link to='/panier'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="cart-top" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg></Link>
            <div className="nav-cart-count">{total()}</div>
            </div>
        </div>
        
    )
}
export default Header;