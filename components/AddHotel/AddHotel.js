import React from "react";
import classes from "./AddHotel.module.css";
import Button from "../ui/Button";
import UploadSvg from "../ui/UploadSvg";
const AddHotel = () => {
  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <Button>List Your Hotel</Button>
        <div className={classes.formFeilds}>
            <form>
                    <label>Name</label>
                    <input type='text' ></input>
               
                    <label>Address</label>
                    <input type='text' ></input>
               
               
                    <label>Facilities</label>
                    <input type='text'></input>
                
               
                    <label>Description</label>
                    <input type='text'></input>

                    <div className={classes.upload}>
                    <div>Upload Images</div>
                    <div><UploadSvg/></div>
                    </div>
                    <div className={classes.terms}>
                        <input type='checkbox'/>
                        <label>Terms&Condition</label>
                    </div>
            </form>
            <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
