const { createSlice } = require("@reduxjs/toolkit");



const ModelSlice = createSlice({
    name:"Model",
    initialState:{modelIsVisible:false},
    reducers:{
        toggleModel(state){
            state.modelIsVisible = !state.modelIsVisible;
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