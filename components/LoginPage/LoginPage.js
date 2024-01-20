import React, { useRef, useState,useEffect } from "react";
import classes from "./LoginPage.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AuthActions } from "@/Store/AuthSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [feilds, setFeilds] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (emailRef.current.value != "" && passwordRef.current.value != "") {
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
      dispatch(
        AuthActions.setLoggeedIn({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    } else {
      setFeilds(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      route.push("/");
    } else {
      console.log('Error in logging');
    }
  }, [isLoggedIn, route]);


  const Variants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 50,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
    },
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 50,
    },
  };

  return (
    <motion.div
      className={classes.main}
      variants={Variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.1 }}
    >
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
                  style={{
                    borderBottom: feilds ? "1px solid red" : "1px solid white",
                  }}
                />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Password"
                  ref={passwordRef}
                  style={{
                    borderBottom: feilds ? "1px solid red" : "1px solid white",
                  }}
                />
              </li>
              <button type="submit">Login</button>
            </ul>
          </form>
          <div className={classes.options}>
            <ul>
              <li>Forgot Password</li>
              {!isLoggedIn ? (
                <Link href="/Signup">
                  <li>Sign Up</li>
                </Link>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.text}>
          <p>Welcome Back</p>
          <p>Login to Continue</p>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
