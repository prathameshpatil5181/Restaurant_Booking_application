import React, { useState } from "react";
import classes from "./LoginPage.module.css";
import Link from "next/link";

const emailValid = (email)=>{
  return email.includes('@');
}

const LoginPage = () => {

  const [email,setEmail] = useState('');
  const [isEmailValid,setIsEmailValid]=useState(true);
  const [isEmailTouched,setIsEmailTouched] = useState(false);

  const emailChangeHandler = (event)=>{
    setIsEmailTouched(true);
    setEmail(event.target.value);
    setIsEmailValid(emailValid(event.target.value));
    console.log(event.target.value);
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
          <form className={classes.credentials}>
            <ul>
              <li>
                <input type="text" placeholder="Username" onChange={emailChangeHandler} value={email}/>
                
              </li>
              <li>{isEmailTouched&&isEmailValid?<p>Please enter valid email</p>:''}</li>
              <li>
                <input type="text" placeholder="Password" />
              </li>
              <button>Login</button>
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
        <div className={classes.text}><p>Welcome Back</p><p>Login to Continue</p> </div>
      </div>
    </div>
  );
};

export default LoginPage;
