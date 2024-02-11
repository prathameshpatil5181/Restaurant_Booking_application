import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "../HomePage/Footer";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "@/Store/AuthSlice";
import { useEffect } from "react";
import Model from "../ui/Model";
function Layout(props) {
  const pathName = usePathname();
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.model.modelIsVisible);
  const intitialSetup = () => {
    const storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      dispatch(AuthActions.setLoggedIn());
    }
  };

  useEffect(() => {
    intitialSetup();
  }, []);

  return (
    <div className="Master-class">
      <div className="ModelClass">
        {visible ? (
          <AnimatePresence>
            <Model />{" "}
          </AnimatePresence>
        ) : null}
      </div>
      <div className={`${visible ? "z-0 relative" : ""}`}>
        <div className={classes.layoutMain}>
          <MainNavigation />
          <AnimatePresence>
            <div
              className={classes.borderClass}
              style={{
                padding:
                  pathName === "/Login" || pathName === "/Signup"
                    ? ""
                    : "13vh 10vw 0 10vw",
              }}
            >
              <main className={classes.main}>{props.children}</main>
            </div>
            {pathName === "/Login" ||
            pathName === "/Signup" ||
            pathName === "/addhotel" ? (
              ""
            ) : (
              <Footer />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Layout;
