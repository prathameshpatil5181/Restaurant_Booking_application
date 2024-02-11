import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ModelActions } from "./ModelSlice";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
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

