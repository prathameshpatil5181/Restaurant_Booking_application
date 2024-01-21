import React, { useRef, useState, useEffect } from "react";
import classes from "./LoginPage.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AuthActions } from "@/Store/AuthSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { LoginUser } from "@/Store/authCreators";
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [feilds, setFeilds] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginMessage = useSelector(state=>state.auth.loginMessage)
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (emailRef.current.value != "" && passwordRef.current.value != "") {
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
      dispatch(
        LoginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    } else {
      setFeilds(true);
    }
  };

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

  useEffect(()=>{
    if(isLoggedIn && loginMessage==='success' ){
      route.push('/');
    }
  },[isLoggedIn,loginMessage]);


  useEffect(()=>{
    const setUpLogin = ()=>{
      dispatch(AuthActions.setLoginMessage({
        status:'pass',
        message:''
      }));
    }
    setUpLogin();
  },[]);

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
          <AnimatePresence>
            {!isLoggedIn && loginMessage!=''&& loginMessage!='success' && (
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
                <p className=" font-sans">{loginMessage}</p>
              </motion.div>
            )}
          </AnimatePresence>
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
