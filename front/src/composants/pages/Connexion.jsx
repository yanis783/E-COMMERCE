import React from "react";

function Connexion() {
  return (

      <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder="Ton nom" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Mot de passe" />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already have an account ? <span>Login</span></p>
    <div className="loginsignup-agree">
      <input type="checkbox" name="" id="" />
      <p>By continuing, i agree to the terms of use & privacy policy</p>
    </div>
    </div>
  </div>
    )
}
export default Connexion;
