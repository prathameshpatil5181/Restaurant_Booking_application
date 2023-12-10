import React from "react";

const Pagination = (props) => {
  return (
    <ul className="flex flex-row gap-5 align-middle justify-center w-full">
      {[...Array(props.pages)].map((page, index) => (
        <li
          key={index + 1}
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            color:props.active-1===index?'black':'white',
            fontFamily: "Nunito,sans-serif",
            backgroundColor:props.active-1===index?'white':'',
            cursor:'pointer',
          }}

          onClick={()=>props.onClick(index+1)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
