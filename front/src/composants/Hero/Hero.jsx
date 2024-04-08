import React from "react";
import hero_img from "../../assets/hero.png"
import hand_icon from "../../assets/hand_icon.png"
import arrow from "../../assets/arrow.png"
function Hero() {
  return (
      <div className="hero">
        <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
      </div>
    
    )
}
export default Hero;


     