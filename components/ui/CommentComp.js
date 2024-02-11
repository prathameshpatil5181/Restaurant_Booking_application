import React from "react";
import classes from "./CommentComp.module.css";
const CommentComp = () => {
  return (
    <div className={classes.main}>
      <div className={classes.images} >
        <img src="/profile.jpeg"  />
      </div>
      <div className={classes.comment}>
        <p>
        &apos;Stunning design and easy navigation! I found booking my dream getaway
          seamless and hassle-free. Can&apos;t wait to experience the luxury and
          comfort your hotel promises. Highly recommended&apos;
        </p>
      </div>
    </div>
  );
};

export default CommentComp;
