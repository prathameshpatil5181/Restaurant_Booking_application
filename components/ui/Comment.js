import React from 'react'
import ProfileSvg from './ProfileSvg'
import StarRating from './StarRating';
const Comment = (props) => {
  return (
    <div>
        <div style={{display:'flex', flexDirection:'column' ,gap:'10px', marginBottom:"25px"}}>
            <ul style={{display:'flex', gap:'20px', alignItems:'center'}}>
              <li><ProfileSvg/></li>
              <li>{props.name}</li>
              <li>{props.date}</li>
              <li><StarRating Fixed={props.rating} /></li>
            </ul>
            <div>{props.comment}</div>
          </div>
      
    </div>
  )
}

export default Comment
