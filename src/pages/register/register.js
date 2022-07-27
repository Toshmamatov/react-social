import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lm-Social</h3>
          <p className="loginDesc">
            Connect with friends and the world around you pn Lm-social
          </p>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="email" placeholder="Username" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />

            <input type="email" placeholder="Password" className="loginInput" />

            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
            />
            <button className="loginButton">Log in</button>
            <button className="loginRegisterAccount">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
