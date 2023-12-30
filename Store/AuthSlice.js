import { createSlice } from "@reduxjs/toolkit";

const AuthSlice =createSlice({
    name:'authSlice',
    initialState: {isLoggedIn:false},
    reducers:{
        setLoggeedIn(state,action){
            if(action.payload==='login'){
                state.isLoggedIn = true;
            }
            else if(action.payload==='signup'){
                state.isLoggedIn = true;
            }
            else if(action.payload==='logout'){
                state.isLoggedIn = false;
            }
            else{
                state.isLoggedIn = false;
            }
        }
    }                  
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;
