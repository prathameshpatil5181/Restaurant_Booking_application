import React, { useRef, useEffect, useState } from "react";
import classes from "./AddHotel.module.css";
import Button from "../ui/Button";
import UploadSvg from "../ui/UploadSvg";
import { useDispatch,useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

///------------------------------------------------------------
///------------------------------------------------------------

const AddHotel = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const [allOptions, setAllOptions] = useState([
    "AC",
    "WIFI",
    "PARKING",
    "SWIMING POOL",
  ]);
  const [selected, setSelected] = useState([]);
  const [model, showModel] = useState(false);
  const modelRef = useRef();
  const [options, setOptions] = useState(allOptions);
  const searchRef = useRef();

  //inputfeild refs
  const namRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  const imageUrls = [];

  // setting up the variables for the validation
  const HotelNameRef = useRef();

  //dispatch dec
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)

  const removeHandler = (itemToRemove) => {
    setSelected((prevSelected) =>
      prevSelected.filter((item) => item !== itemToRemove)
    );
    setAllOptions((prevState) => {
      setOptions(() => {
        return [...prevState, itemToRemove];
      });
      return [...prevState, itemToRemove];
    });
  };

  const addHandler = (item) => {
    setSelected((prevState) => {
      return [...prevState, item];
    });
    setAllOptions((prevState) => {
      setOptions(() => {
        return prevState.filter((facility) => facility != item);
      });
      return prevState.filter((facility) => facility != item);
    });
    setOptions(() => {
      return allOptions;
    });
    searchRef.current.value = "";
  };

  const searchHandler = () => {
    const value = searchRef.current.value;
    const searchResult = allOptions.filter((key) =>
      key.includes(value.toUpperCase())
    );
    setOptions(searchResult);
  };

  useEffect(() => {
    // Event listener to handle clicks outside the modal
    const handleClickOutside = (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        // Clicked outside the modal, so close it
        showModel(false);
      }
    };

    // Attach the event listener when the modal is open
    if (model) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove the event listener when the modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [model]);


  const showImages = (e) => {
    let imageUrls = [];
    for (let i = 0; i < e.target.files.length; i++) {
      imageUrls.push({
        name: e.target.files[i].name,
        size: e.target.files[i].size,
        image: e.target.files[i],
        url: URL.createObjectURL(e.target.files[i]),
      });
    }
    setImageFiles(imageUrls);
  };

  //submit handler
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if(!isLoggedIn){
      console.log("loginFirst")
      return;
    }
    if (
      namRef.current.value &&
      addressRef.current.value &&
      cityRef.current.value &&
      countryRef.current.value &&
      descriptionRef.current.value &&
      imageFiles.length >0
    ) {
        dispatch(
          sendToserver({
            name: namRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            country: countryRef.current.value,
            description: descriptionRef.current.value,
            imageFiles: imageFiles,
            facilities: selected,
          })
        );
    } else {
      console.log("someIssue");
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.form}>
        <Button>List Your Hotel</Button>
        <div className={classes.formFeilds}>
          <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={namRef}></input>

            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Address line 1"
              ref={addressRef}
            ></input>
            <div className="flex flex-row w-full gap-2">
              <input
                type="text"
                id="address"
                placeholder="City"
                className="grow"
                ref={cityRef}
              ></input>
              <input
                type="text"
                id="address"
                placeholder="Country"
                className="grow"
                ref={countryRef}
              ></input>
            </div>

            <label htmlFor="facility">Facilities</label>
            <div ref={modelRef}>
              <div className=" flex flex-row gap-2 bg-[#ffffff6e] p-1 px-5 rounded-full items-center h-fit text-sm">
                {selected
                  ? selected.map((item, index) => {
                      return (
                        <div
                          className="flex flex-row bg-slate-600 rounded-md gap-2 p-1 w-auto"
                          key={index}
                        >
                          <div className="whitespace-nowrap">{item}</div>
                          <div
                            className="cursor-pointer"
                            onClick={() => removeHandler(item)}
                          >
                            &#x2716;
                          </div>
                        </div>
                      );
                    })
                  : ""}
                <input
                  type="text"
                  className="bg-transparent w-full"
                  ref={searchRef}
                  onFocus={() => showModel(true)}
                  style={{ marginBottom: "0px", background: "transparent" }}
                  onChange={searchHandler}
                />
              </div>
              <AnimatePresence>
                {model && options.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0, transition: { delay: 0.1 } }}
                    className="flex flex-row absolute bg-white p-2 gap-2 rounded-md "
                  >
                    {options.map((item, index) => {
                      return (
                        <div
                          className="flex flex-row bg-slate-600 rounded-md gap-2 p-1 cursor-pointer"
                          key={index}
                        >
                          <div onClick={() => addHandler(item)}>{item}</div>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
            <label htmlFor="desc">Description</label>
            <input type="text" id="desc" ref={descriptionRef}></input>

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
            <div className="flex flex-row overflow-scroll no-scrollbar scroll-smooth ">
              {imageFiles.length > 0
                ? imageFiles.map((file, index) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={index}
                      src={file.url}
                      alt={`'image'${index}`}
                      className=" h-32 w-60 m-2 rounded-md"
                    />
                  ))
                : ""}
            </div>
            <div className={classes.terms}>
              <input type="checkbox" />
              <label>Terms & Conditions</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;