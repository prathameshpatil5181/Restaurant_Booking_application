import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
function MainNavigation() {
  const router = useRouter();
  const pathName = usePathname()
  return (
    <div className={classes.main}>
        <nav className={classes.navigation}>
          <div className={classes.logo}>Hotelmania</div>
          <div className={classes.ulitems}>
            <ul className={classes.listitems}>
              <li >
                <Link href="/" className={pathName==='/'?classes.active:''}>Home</Link>
              </li>
              <li>
                <Link href="/Hotels" className={pathName==='/Hotels'?classes.active:''}>Hotels</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={pathName==='/Login' || pathName==='/Signup'?classes.buttonActive:classes.end}>
            <button onClick={()=>router.push('/Login')}>Login/Sign Up</button>
          </div>
        </nav>
    </div>
  );
  // lets
}

export default MainNavigation;
