import React, { useRef } from "react";
import classes from "./LoginPage.module.css";
import Link from "next/link";
import { userAgent } from "next/server";


const emailValid = (email) => {
  return email.includes("@");
};

const LoginPage = () => {

 const emailRef = useRef();
 const passwordRef = useRef();

const formSubmitHandler = (e)=>{
  e.preventDefault();
  console.log(emailRef.current.value);
  console.log(passwordRef.current.value);
}
  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          }}
                >
          <form className={classes.credentials} onSubmit={formSubmitHandler}>
            <ul>
              <li>
                <input
                  type="text"
                  placeholder="Username"
                  ref={emailRef}
                />
              </li>
              <li>
                <input type="text" placeholder="Password" ref={passwordRef} />
              </li>
              <button type="submit">Login</button>
            </ul>
          </form>
          <div className={classes.options}>
            <ul>
              <li>Forgot Password</li>
              <Link href="/Signup">
                <li>Sign Up</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.text}>
          <p>Welcome Back</p>
          <p>Login to Continue</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
