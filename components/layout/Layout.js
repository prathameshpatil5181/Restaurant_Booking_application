import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import HomePageBody from "../HomePage/HomePageBody";
import Footer from "../HomePage/Footer";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
function Layout(props) {
  const pathName = usePathname();
  const visible = useSelector(state=>state.ui.isVisible)
  return (
    <div className={classes.layoutMain}>
        <MainNavigation />
        <AnimatePresence>
        <div className={classes.borderClass} style={{padding:pathName === "/Login" || pathName === "/Signup" ? "" : "13vh 10vw 0 10vw"}}>
          <main className={classes.main}>{props.children}</main>
        </div>
          {pathName === "/Login" || pathName === "/Signup" ? "" : <Footer />}
        </AnimatePresence>
      </div>

  );
}

export default Layout;
