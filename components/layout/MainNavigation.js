import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
function MainNavigation() {
  const router = useRouter();

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
                <Link href="/Hotels">Hotels</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={classes.end}>
            <button onClick={()=>router.push('/Login')}>Login/Sign Up</button>
          </div>
        </nav>
    </div>
  );
  // lets
}

export default MainNavigation;
