import React, { useEffect } from "react";
import classes from "./SignupPage.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { EmailValidation, debounce, passwordValidation } from "@/utils/util";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { AuthActions } from "@/Store/AuthSlice";
import storeUser from "@/Store/authCreators";
//signup functional component

const SignupPage = () => {
  //hooks declaraition
  const route = useRouter();
  const nameRef = useRef();
  const signup = useSelector((state) => state.auth.signup);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginMessage = useSelector(state=>state.auth.loginMessage)

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
  }, 500);

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
  }, 500);

  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(email.value);
    console.log(password.value);
    if (
      password.isPasswordValid &&
      email.isEmailValid &&
      nameRef.current.value != "" &&
      nameRef.current.value != " "
    ) {
      dispatch(
        storeUser({
          name: nameRef.current.value,
          email: email.value,
          password: password.value,
        })
      );

    } 

  };

  const setSignup = () => {
    console.log('here');
    dispatch(
      AuthActions.setSignupMessage({
        status: "Done",
        message: "",
      })
    );
  };

  useEffect(()=>{
    if(isLoggedIn && loginMessage==='success' ){
      if (route.asPath === '/Login') {
        // If the current route is '/Login', go back again
        route.back();
        route.back();
      } else {
        // Otherwise, go back to the previous page
        route.back();
      }
    }
  },[isLoggedIn,loginMessage]);

  useEffect(() => {
    setSignup(); // Corrected to call the function
  }, []); // Empty dependency array to run the effect only once on mount


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
          <AnimatePresence>
            {!signup.isSignedUp && (
              <motion.div
                className="error w-fit bg-white p-[0.5vw] rounded-md text-red-500 text-sm mb-2"
                initial={{
                  opacity: 0,
                  height: "0%",
                }}
                animate={{
                  opacity: 1,
                  height: "fit-content",
                }}
                exit={{
                  opacity: 0,
                  height: "0%",
                }}
              >
                <p className=" font-sans">{signup.signUpMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
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
                <li>
                  <button>Login</button>
                </li>
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
