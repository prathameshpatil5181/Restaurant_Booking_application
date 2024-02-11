import { AuthActions } from "./AuthSlice";
import { ModelActions } from "./ModelSlice";
export let users = [];
const path = "https://hotelmania-7bfd0-default-rtdb.firebaseio.com/user.json";

///------------------------------------------------------------------------------------------------------------------------
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDKqxAZfIafBBBtnLiyV3-jyIouYvU6UVU",
  authDomain: "hotelmania-7bfd0.firebaseapp.com",
  databaseURL: "https://hotelmania-7bfd0-default-rtdb.firebaseio.com",
  projectId: "hotelmania-7bfd0",
  storageBucket: "hotelmania-7bfd0.appspot.com",
  messagingSenderId: "918277547814",
  appId: "1:918277547814:web:3f2a7f22a02e944e7903e7",
};

const app = initializeApp(firebaseConfig);

export const setUpFirebase = async () => {
  const app = initializeApp(firebaseConfig);
};

///------------------------------------------------------------------------------------------------------------------------

export const getAllUsers = async () => {
  try {
    const response = await fetch(path);
    const body = await response.json();

    const tempUser = [];
    for (const key in body) {
      tempUser.push({
        key: key,
        name: body[key].name,
        email: body[key].email,
        password: body[key].password,
      });
    }
    users = tempUser;
    return users;
  } catch (error) {
    console.log(error);
    return;
  }
};

const storeUser = (userData) => {
  return async (dispatch) => {
    // dispatch(AuthActions.addUser(userData));
    try {
      const alluser = await getAllUsers();

      const userExits = alluser.find((user) => user.email === userData.email);
      if (userExits) {
        dispatch(
          AuthActions.setSignupMessage({
            status: "error",
            message: "user Already Exit",
          })
        );
        console.log("user exist");
      } else {
        const response = await fetch(path, {
          method: "POST",
          body: JSON.stringify(userData),
        });
        const temp = await response.json();
        localStorage.setItem("userId", temp.name);
        dispatch(
          AuthActions.setSignupMessage({
            status: "Done",
            message: "Success",
          })
        );
        dispatch(AuthActions.setLoggedIn(userData));
      }
    } catch (error) {
      console.log("error");
      return;
    }
  };
};

export const LoginUser = (userData) => {
  return async (dispatch) => {
    const alluser = await getAllUsers();

    const userExits = alluser.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (userExits) {
      localStorage.setItem("userId", userExits.key);
      dispatch(AuthActions.setLoggedIn(userData));
    } else {
      dispatch(
        AuthActions.setLoginMessage({
          status: "Fail",
          message: "Invalid Credential: Email or Password is Incorrect",
        })
      );
      console.log("Invalid credentials");
      return false;
    }
  };
};

//------------------------------------------------------------------------------------------------------------------------
export const sendToserver = ({
  name,
  address,
  city,
  country,
  description,
  imageFiles,
  facilities,
  starRating,
  price,
}) => {
  return async (dispatch) => {


    console.log("done");

    dispatch(ModelActions.toggleModel({ message: "Loading" }));

    try {
      const storage = getStorage();
      const imageUrls = [];
      // Perform actions with the image data (e.g., upload to Firebase Storage)
      imageFiles.map(async (imagesFile, index) => {
        const imageRef = ref(
          storage,
          `hotels/${name != "" ? name : "test"}/${imagesFile.name}`
        );
        await uploadBytes(imageRef, imagesFile.image).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          getDownloadURL(snapshot.ref).then(async (val) => {
            console.log(val);
            imageUrls.push(val);
            if (imageUrls.length === imageFiles.length) {
              if (
                name &&
                address &&
                country &&
                description &&
                facilities &&
                imageFiles.length > 0
              ) {
                const response = await fetch(
                  "https://hotelmania-7bfd0-default-rtdb.firebaseio.com/Hotel.json",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      name,
                      address,
                      city,
                      country,
                      description,
                      imageUrls: imageUrls,
                      facilities,
                      starRating,
                      price,
                    }),
                  }
                );

                const json = await response.json();
                dispatch(ModelActions.toggleModel({ message: "done" }));
                console.log(json);
              } else {
                // Your logic when any of the refs does not have a value or imageUrls is empty
                console.log("Some fields are empty or imageUrls is empty");
              }
            }
          });
        });
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
};

//------------------------------------------------------------------------------------------------------------------------

export default storeUser;
