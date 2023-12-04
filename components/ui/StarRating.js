import React, { useState } from "react";

const StarRating = (props) => {
  const [rating, setRating] = useState(props.Fixed ? props.Fixed : 2);
  const totalStars = 5;

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return props.Fixed ? (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center', gap:'10px'}}>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: starValue <= rating ? "#FFD700" : "#CCCCCC",
              transition: "color 0.5s ease-in-out",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  ) : (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}>
      {[...Array(totalStars)].map((star, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: starValue <= rating ? "#FFD700" : "#CCCCCC",
              transition: "color 0.5s ease-in-out",
            }}
            onClick={() => handleClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
