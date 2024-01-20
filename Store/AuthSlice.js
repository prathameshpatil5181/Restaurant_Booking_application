import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    users: [
      {
        name: "newname",
        email: "123@123.123",
        password: "A@123456",
        Permissions: ["users"],
      },
    ],
  },
  reducers: {
    addUser(state, action) {
      console.log("here2");
      if (state.users.find((user) => user.email === action.payload.email)) {
        console.log("user already exist");
      } else {
        state.users.push({
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          Permissions: ["users"],
        });
        state.isLoggedIn = true;
        console.log("user created");  
      }
    },
    setLoggeedIn(state, action) {
      const userAvailable = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (userAvailable) {
        state.isLoggedIn = true;
        console.log("login success");
      } else {
        state;
        console.log("login failed");
      }
    },
    setLogOut(state, action) {
      state.isLoggedIn = false;
    },
  },
});


export const AuthActions = AuthSlice.actions;

export default AuthSlice;
