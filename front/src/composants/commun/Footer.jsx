import React from "react";
import footer_logo from "../../assets/logo1.png"
import insta from "../../assets/instagram_icon.png"
import pinterest from "../../assets/pinterest_icon.png"
import watsapp from "../../assets/whatsapp_icon.png"
function Footer (){
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SUNNAH-STORE</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Officies</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={watsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @Yanis 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer;