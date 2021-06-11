import React, { useState } from "react";
import "./Login.css";
import logo from "../Images/Netflix Logo.png";
import SignUp from "./SignUp";

function Login() {
  const [started, setStarted] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src={logo} alt="netflix logo" />

        <button onClick={() => setStarted(true)} className="login__button">
          Sign In
        </button>

        <div className="login--gradient" />
      </div>

      <div className="login__body">
        {started ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login__form">
              <form>
                <input
                  className="login__input"
                  type="email"
                  placeholder="Email Address"
                />
                <button onClick={() => setStarted(true)}>GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
