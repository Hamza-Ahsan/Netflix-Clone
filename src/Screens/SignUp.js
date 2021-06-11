import React, { useRef } from "react";
import "./SignUp.css";
import { auth } from "../Requesting API/firebase";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUp">
      <h1>Sign In</h1>
      <form>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn}>Sign In</button>
      </form>
      <h4>
        <span className="login__gray">New to Netflix? </span>
        <span onClick={register} className="login__underline">
          Sign Up now
        </span>
      </h4>
    </div>
  );
}

export default SignUp;
