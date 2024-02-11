import { createSlice } from "@reduxjs/toolkit";

const BookingSlice = createSlice({
    name:'bookingSlice',
    initialState:{
        dates:[
            new Date(),new Date(new Date().getTime() + 48 * 60 * 60 * 1000)
        ],
        Rooms:1,
        guest:1,
        roomlimit:11,
        guestlimit:33
    },
    reducers:{

        setDate(state,action){

            state.dates[0]=action.payload[0];
            state.dates[1]=action.payload[1];
        },

        setRooms(state,action){
            const room = parseInt(action.payload.value);
            if(action.payload.type==="increment"){
                if(state.Rooms+room<=state.roomlimit){
                    state.Rooms =  state.Rooms+room;
                }
                
            }
            else if(action.payload.type==="decrement"){
                if(state.Rooms>1){
                    
                    state.Rooms = state.Rooms-room;
                    if(state.guest/3>state.Rooms){
                        state.guest = state.Rooms*3;
                    }
                }
            }
            else{
                state.Rooms = room;
            }
        },
        setGuest(state,action){
            const guests = parseInt(action.payload.value);
            if(action.payload.type==="increment" && state.guest+guests<=state.guestlimit){
                state.guest = state.guest+guests;
                if(state.guest%3==0){
                    
                    state.Rooms = state.guest/3;
                }
                else{
                    state.Rooms = Math.floor(state.guest/3)+1;  
                }
                
            }
            else if(action.payload.type==="decrement" && state.guest-guests>1){
                state.guest = state.guest-guests;
                if(state.guest%3==0){
                    
                    state.Rooms = state.guest/3;
                }
                else{
                    state.Rooms = Math.floor(state.guest/3)+1;   
                }
            }
        }
    }
});


export const BookActions = BookingSlice.actions;

export default BookingSlice;