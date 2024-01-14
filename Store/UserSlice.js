import { createSlice } from "@reduxjs/toolkit";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

const UserSlice = createSlice({
    name:'UserSlice',
    initialState:[],
    reducers:{
        addUser(state,action){
            if(action==='add'){
                 if(state.find(user=>user.email===action.payload.email)){
                    return 'User already Exit';
                 }
            }
        }
    }

})