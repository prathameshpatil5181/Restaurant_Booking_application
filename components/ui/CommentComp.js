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
          "Stunning design and easy navigation! I found booking my dream getaway
          seamless and hassle-free. Can't wait to experience the luxury and
          comfort your hotel promises. Highly recommended!"
        </p>
      </div>
    </div>
  );
};

export default CommentComp;
