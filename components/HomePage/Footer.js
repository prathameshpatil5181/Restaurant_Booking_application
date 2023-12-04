import React from "react";
import Image from "next/image";
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>Hotelmania</div>
      <div className={classes.menuItem}>
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>Email</li>
        </ul>
        <ul >
          <li className={classes.menuItem}>Follow Us</li>
          <li>
            <ul className={classes.social}>
                <li><Image src='/facbook.svg' height={30} width={30}/></li>
                <li><Image src='/instagram2.svg' height={30} width={30}/></li>
                <li>
                <Image src='/twitter.svg' height={30} width={30}/>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
