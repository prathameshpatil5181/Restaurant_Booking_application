import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    loginMessage:'',
    signup:{
      isSignedUp:true,
      signUpMessage:"",
    }
  },
  reducers: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
      state.loginMessage = 'success';
    },
    setLogOut(state) {
      state.isLoggedIn = false;
      state.loginMessage = '';
    },
    setSignupMessage(state,action){
      state.signup.signUpMessage = action.payload.message;
      if(action.payload.status==='error'){
        state.signup.isSignedUp=false;
      }
      else{
        state.signup.isSignedUp=true;
      }
    },
    setLoginMessage(state,action){
      if(action.payload.status==='success'){
        state.isLoggedIn = true;
        state.loginMessage = 'success';

      }
      else{
        state.isLoggedIn = false;
        state.loginMessage = action.payload.message;
      }
    }
  },
});


export const AuthActions = AuthSlice.actions;

export default AuthSlice;
