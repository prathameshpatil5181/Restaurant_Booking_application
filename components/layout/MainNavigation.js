import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { uiActions } from "@/Store/uiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProfileSvg from "../ui/ProfileSvg";
import { AnimatePresence, motion } from "framer-motion";
import {  useState} from "react";
import OptionModel from "./OptionModel";

function MainNavigation() { 
  const router = useRouter();
  const pathName = usePathname();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showModal, setShowModal] = useState(false);

  return (
    <AnimatePresence>
      <div className={classes.main}>
        <nav className={classes.navigation}>
          <div className={classes.logo}>Hotelmania</div>
          <div className={classes.ulitems}>
            <ul className={classes.listitems}>
              <li>
                <Link
                  href="/"
                  className={pathName === "/" ? classes.active : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Hotels"
                  className={pathName === "/Hotels" ? classes.active : ""}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/addhotel" className={pathName === "/addhotel" ? classes.active : ""}>Add Hotel </Link>
              </li>
            </ul>
          </div>

          <div
            className={
              pathName === "/Login" || pathName === "/Signup"
                ? classes.buttonActive
                : classes.end
            }
            style={{}}
          >
            {isLoggedIn ? (
              <motion.button
                key="profile-button"
                onClick={() => setShowModal((prevState) => !prevState)}
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { delay: 0.5 } }}
                exit={{ width: "0%" }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ width: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <ProfileSvg />
                </motion.div>
              </motion.button>
            ) : (
              <motion.button
                key="login-button"
                initial={{ width: "0%" }}
                animate={{ width: "100%", transition: { delay: 0.5 } }}
                exit={{ width: "0%" }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                onClick={() => router.push("/Login")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ width: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Login/SignUp
                </motion.div>
              </motion.button>
            )}
            <AnimatePresence>
              {isLoggedIn && showModal ? (
                <OptionModel
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </AnimatePresence>
  );
  // lets
}

export default MainNavigation;
