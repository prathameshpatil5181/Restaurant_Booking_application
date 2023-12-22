import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { uiActions } from "@/Store/uiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function MainNavigation() {
  const router = useRouter();
  const pathName = usePathname();
  const count = useSelector(state=>state.compare.count)
  const dispatch = useDispatch(uiActions);
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
          <div className={pathName==='/Login' || pathName==='/Signup'?classes.buttonActive:classes.end} style={{}}>
            <button onClick={()=>router.push('/Login')}>Login/Sign Up</button>
            <button onClick={()=>(dispatch(uiActions.toggle()))}>cart&nbsp; {count}</button>
          </div>
        </nav>
    </div>
  );
  // lets
}

export default MainNavigation;
