import React, { useState } from "react";
import classes from "./AddHotel.module.css";
import Button from "../ui/Button";
import UploadSvg from "../ui/UploadSvg";
const AddHotel = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [show,setShow] = useState(false);
  const showImages = (e) => {

    let imageUrls = [];
    for(let i=0;i<e.target.files.length;i++){
      imageUrls.push(URL.createObjectURL(e.target.files[i]));
    }

    setImageFiles(imageUrls);
    // setImageFiles(e.target.files);
  };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <Button>List Your Hotel</Button>
        <div className={classes.formFeilds}>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'></input>

            <label htmlFor="address">Address</label>
            <input type="text" id='address'></input>

            <label htmlFor="facility">Facilities</label>
            <input type="text" id='facility'></input>

            <label htmlFor="desc">Description</label>
            <input type="text" id='desc'></input>

            <div className={classes.upload}>
              <div>Upload Images</div>
              <input
                type="file"
                id="file"
                multiple
                accept="image/*"
                onChange={showImages}
              ></input>
              <label htmlFor="file">
                <div>
                  <UploadSvg />
                </div>
              </label>
            </div>
              <div className="flex flex-row">
                {imageFiles.length > 0
                  ? imageFiles.map((file, index) => (
                      <img
                        src={file}
                        alt={`'image'${index}`}
                        className=" h-32 w-60 m-2 rounded-md"
                      />
                    ))
                  : ""}
              </div>
            <div className={classes.terms}>
              <input type="checkbox" />
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
