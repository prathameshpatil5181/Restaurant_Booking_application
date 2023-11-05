import React from "react";
import classes from "./LoginPage.module.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <div style={{ display:"flex", flexDirection:'column',
       justifyContent:'center',
       alignItems:'left'
    
    }}>
        <form className={classes.credentials}>
          <ul>
            <li>
              <input type="text" placeholder="Username" />
              {/* <span>eye</span> */}
            </li>
            <li>
              <input type="text" placeholder="Password" />
              {/* <span>eye</span> */}
            </li>
            <button>Login</button>
          </ul>
        </form>
        <div className={classes.options}>
            <ul>
                <li>Forgot Password</li>
                <Link href='/Signup'><li>Sign Up</li></Link>
            </ul>
        </div>
        </div>
        <div className={classes.line}></div>
      <div className={classes.text}>Welcome Back Login to Continue</div>
      </div>
    </div>
  );
};

export default LoginPage;
