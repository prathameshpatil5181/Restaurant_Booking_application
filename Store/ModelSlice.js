const { createSlice } = require("@reduxjs/toolkit");



const ModelSlice = createSlice({
    name:"Model",
    initialState:{modelIsVisible:false,message:'Loading'},
    reducers:{
        toggleModel(state,action){
            state.modelIsVisible = !state.modelIsVisible;
            if(action.payload.message){
                state.message = action.payload.message 
             }
             else{
                 state.message = '';
             }
            const body = document.getElementsByTagName("body")[0];
            if(state.modelIsVisible){
                body.style.overflow = 'hidden';
            }
            else{
                body.style.overflow = 'auto';
            }
        }
    }
})

export const ModelActions = ModelSlice.actions;

export default ModelSlice;