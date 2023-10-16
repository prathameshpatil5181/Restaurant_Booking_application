import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from "next/image";
import IMG from'../../public/pizza.jpg'
function MainNavigation() {
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.Mainnavigation}>
        <div className={classes.logo}>Restomania</div>
        <div className={classes.middleDiv}>
          <ul className={classes.UL}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/New-meetup">Restaurants</Link>
            </li>
            <li>
              <Link href="/">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className={classes.endDiv}>
          <ul className="flex flex-row-reverse">
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main className={classes.mainClass}>
      <div>
      <Image className={classes.image} src={IMG}/>
      </div>
    </main>
    </>
  );
}

export default MainNavigation;
