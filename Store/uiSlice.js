import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:'uiSlice',
    initialState:{isVisible:false},
    reducers:{
        toggle(state){
            state.isVisible = !state.isVisible

            console.log('here');
            const bodyScroll = document.querySelector('body');
            console.log(state.isVisible)
            if(state.isVisible){
                bodyScroll.style.overflow ='hidden'
            }
            else{
                bodyScroll.style.overflow = 'auto'
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;