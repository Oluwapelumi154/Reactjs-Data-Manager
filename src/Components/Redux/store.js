import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Redux/Slices/AuthSlice";
const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
export default store;
