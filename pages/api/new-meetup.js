import { getStorage, ref, uploadBytes } from "firebase/storage";

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Handle your POST request logic here
    const { image } = req.body;
    console.log(image[0]);
    const test = await setUpFirebase(); 
    const storage = getStorage();
    const storageRef = ref(storage, "image");
    const contentType = 'image/jpg';

    // Perform actions with the image data (e.g., upload to Firebase Storage)
    const imageRef = ref(storage, `image/${image[0].name}`);
    uploadBytes(imageRef, image[0].image,{contentType}
    ).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
