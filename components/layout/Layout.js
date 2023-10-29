import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import HomePageBody from "../HomePage/HomePageBody";
import FamousDestinations from "../HomePage/FamousDestinaition/FamousDestinations";
import Dots from "../ui/Dots";
function Layout(props) {
  return (
    <div className={classes.borderClass}>
      <MainNavigation />
     
      <main className={classes.main}>
      {props.children}
      </main>
    </div>
  );
}

export default Layout;
