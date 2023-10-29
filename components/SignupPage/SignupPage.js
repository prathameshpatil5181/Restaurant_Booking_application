import React from "react";
import classes from "./SignupPage.module.css";
import Link from "next/link";
const SignupPage = () => {
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
                <input type="text" placeholder="Name" />
                {/* <span>eye</span> */}
              </li>
              <li>
                <input type="text" placeholder="Email" />
                {/* <span>eye</span> */}
              </li>
              <li>
                <input type="text" placeholder="Password" />
                {/* <span>eye</span> */}
              </li>
              <button>Sign Up</button>
            </ul>
          </form>
          <div className={classes.options}>
            <ul>
              <Link href='/Login'><li>Login</li></Link>
            </ul>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.text}>Welcome Sign up to Continue</div>
      </div>
    </div>
  );
};

export default SignupPage;
