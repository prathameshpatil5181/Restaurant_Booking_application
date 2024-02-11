import React, { useRef, useState } from "react";
import StarRating from "../ui/StarRating";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
const AddComment = () => {
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);
  const [stars,setStars] = useState(0);
  const param = useParams();
  const textRef = useRef();
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(textRef.current.value);
    console.log(stars);
    console.log(param.hotelId);

    if(isLoggedIn){
      try{

        const userId = localStorage.getItem('userId');
        const userName = await fetch(`https://hotelmania-7bfd0-default-rtdb.firebaseio.com/user/${userId}/name.json`,{
          method:"GET"
        })
  
        const json = await userName.json();
        console.log(json);


        const response = await fetch(`https://hotelmania-7bfd0-default-rtdb.firebaseio.com/Hotel/${param.hotelId}/comment/${userId}.json`,{
          method:"PATCH",
          body:JSON.stringify({
            userName:json,
            userComment:textRef.current.value,
            stars,
            userId
          })
        })

        if(response.status === 200){
          console.log('done');
          textRef.current.value='';
          setStars(0); 
        }
        
      }
      catch(error){
        console.error(error);
      }

    }
    else{
      console.log('login frist')
    }
    

  }
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment</label>
        <StarRating setStars={setStars}/>
        <textarea
        ref ={textRef}
          id="comment"
          className="w-full rounded-md focus:outline-0 text-black p-5 h-min "
        />
        <button type='submit' className="bg-white text-black rounded-md w-fit h-fit text-lg px-3 py-1">Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
