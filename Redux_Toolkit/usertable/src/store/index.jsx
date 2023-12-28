import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice, // Ensure you access the reducer property of userSlice
  },
});

export default store;
