import { AuthActions } from "./AuthSlice";

export const storeUser = (userData) => {
  return async (dispatch) => {

    dispatch(AuthActions.addUser(userData));

    const path = 'https://hotelmania-7bfd0-default-rtdb.firebaseio.com/user.json'

    try{

      const response = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(userData),
      })

      console.log(response);
    }
    catch(error){
      console.log("error");
      return;
    }
  };
};

