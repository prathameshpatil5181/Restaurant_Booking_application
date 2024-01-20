import React, {useEffect}from "react";
import classes from "./SignupPage.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { EmailValidation, debounce, passwordValidation } from "@/utils/util";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import storeUser from "@/Store/authCreators";
//signup functional component

const SignupPage = () => {
  //hooks declaraition
  const route = useRouter();
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  const nameRef = useRef();
  const [email, setEmail] = useState({
    value: "",
    isEmailValid: false,
    isEmailTouched: false,
  });

  const [password, setPassword] = useState({
    value: "",
    isPasswordValid: { value: false, error: null },
    isPasswordTouched: false,
  });



  //handlers

  const emailChangeHandler = debounce((event) => {
    setEmail((prevstate) => {
      return {
        ...prevstate,
        value: event.target.value,
        isEmailTouched: true,
        isEmailValid: EmailValidation(event.target.value),
      };
    });
  }, 1000);

  const passwordChangeHandler = debounce((event) => {
    console.log(password.isPasswordValid);
    setPassword((prevstate) => {
      return {
        ...prevstate,
        value: event.target.value,
        isPasswordTouched: true,
        isPasswordValid: passwordValidation(event.target.value),
      };
    });
  }, 1000);

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(email.value);
    console.log(password.value);
    if(password.isPasswordValid && email.isEmailValid && nameRef.current.value!='' && nameRef.current.value!=' '){
    dispatch(
        storeUser({
            name: nameRef.current.value,
            email: email.value,
            password: password.value,
        })
      );
    }
    else{
      console.log('error in signing up');
    }
    
  };

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
          <form className={classes.credentials} onSubmit={submitFormHandler}>
            <ul>
              <li>
                <input type="text" placeholder="Name" ref={nameRef} />
                {/* <span>eye</span> */}
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={emailChangeHandler}
                />
                <div>
                  {!email.isEmailValid && email.isEmailTouched
                    ? "email is not valid"
                    : ""}
                </div>
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={passwordChangeHandler}
                />
                <div>
                  {!password.isPasswordValid.value && password.isPasswordTouched
                    ? password.isPasswordValid.error
                    : ""}
                </div>
              </li>
              <button type="submit">Sign Up</button>
            </ul>
          </form>
          <div className={classes.options}>
            <ul>
              <Link href="/Login">
                <li>Login</li>
              </Link>
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
