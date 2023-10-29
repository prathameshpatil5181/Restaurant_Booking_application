import classes from "./MainNavigation.module.css";
import Link from "next/link";;
function MainNavigation() {
  return (
    <div className={classes.main}>
        <nav className={classes.navigation}>
          <div className={classes.logo}>Hotelmania</div>
          <div className={classes.ulitems}>
            <ul className={classes.listitems}>
              <li className={classes.active}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Login">Hotels</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={classes.end}>
            <Link href='/'><button>Login/Sign Up</button></Link>
          </div>
        </nav>
    </div>
  );
  // lets
}

export default MainNavigation;
