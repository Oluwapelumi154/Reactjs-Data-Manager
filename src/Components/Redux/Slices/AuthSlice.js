import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  isError: false,
  errorMessage: null,
  message: null,
  isSuccess: false,
};
const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    AuthPending: (state) => {
      state.isLoading = true;
      state.isAuthenticated = null;
      state.user = null;
      state.isError = false;
      state.message = null;
      state.isSuccess = false;
    },
    AuthSuccess: (state, { payload }) => {
      console.log(payload.message);
      state.isLoading = false;
      state.isAuthenticated = payload.data.token;
      state.user = payload.data.user;
      state.isError = false;
      state.message = payload.message;
      state.isSuccess = true;
    },
    AuthFail: (state, { payload }) => {
      state.isLoading = false;
      state.token = null;
      state.isError = true;
      state.user = null;
      state.isAuthenticated = null;
      state.errorMessage = payload.message;
      state.isSuccess = false;
    },
    AuthLogOut: (state, { payload }) => {
      state.isAuthenticated = null;
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
});
export const { AuthPending, AuthSuccess, AuthFail, AuthLogOut } = AuthSlice.actions;
export default AuthSlice.reducer;
