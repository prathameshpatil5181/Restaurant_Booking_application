import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import HomePageBody from "../HomePage/HomePageBody";
import Footer from "../HomePage/Footer";
import { usePathname } from "next/navigation";
function Layout(props) {
  const pathName = usePathname();
  return (
    <div className={classes.layoutMain}>
    <MainNavigation />
    <div className={classes.borderClass}>
      <main className={classes.main}>
      {props.children}
      </main>
      {pathName==='/Login'||pathName==="/Signup"?'': <Footer/>} 
    </div>
  </div>    

  );
}

export default Layout;
