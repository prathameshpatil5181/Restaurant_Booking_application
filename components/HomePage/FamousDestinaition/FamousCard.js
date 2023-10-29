import React from 'react'
import classes from './FamousCard.module.css'
const FamousCard = (props) => {
  return (
    <div className={classes.destination}>
    <div>
      <img src={props.image} className={classes.image}></img>
    </div>
    <div className={classes.information}>
      <div className={classes.title}>{props.title}</div>
      <div style={{ color: "white" }} className={classes.description}>{props.description}
      </div>
    </div>
  </div>
  )
}

export default FamousCard
