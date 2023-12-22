import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import HomePageBody from "../HomePage/HomePageBody";
import Footer from "../HomePage/Footer";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import HotelModel from "../Models/HotelModel";
import { uiActions } from "@/Store/uiSlice";
function Layout(props) {
  const pathName = usePathname();
  const visible = useSelector(state=>state.ui.isVisible)
  return (
    <div className={classes.layoutMain}>
      {visible?<div className="absolute z-10"><HotelModel/></div>:''}
      <div className={`${visible?'blur z-0':''}`} 
      >
        <MainNavigation />
        <div className={classes.borderClass} style={{padding:pathName === "/Login" || pathName === "/Signup" ? "" : "13vh 10vw 0 10vw"}}>
          <main className={classes.main}>{props.children}</main>
        </div>
          {pathName === "/Login" || pathName === "/Signup" ? "" : <Footer />}
      </div>
    </div>
  );
}

export default Layout;
