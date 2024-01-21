import { AuthActions } from "./AuthSlice";
import { useSelector } from "react-redux";
export let users = [];
const path = "https://hotelmania-7bfd0-default-rtdb.firebaseio.com/user.json";

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
        dispatch(AuthActions.setSignupMessage({
          status:'error',
          message:'user Already Exit'
        }))
        console.log("user exist");
      } else {
        const response = await fetch(path, {
          method: "POST",
          body: JSON.stringify(userData),
        });
        const temp = await response.json();
        dispatch(AuthActions.setSignupMessage({
          status:'Done',
          message:'Success'
        }))
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
      dispatch(AuthActions.setLoggedIn(userData));
    } else {
      dispatch(AuthActions.setLoginMessage({
        status:'Fail',
        message:'Invalid Credential: Email or Password is Incorrect'
      }));
      console.log("Invalid credentials");
      return false;
    }
  };
};

export default storeUser;
