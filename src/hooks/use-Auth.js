import axios from "axios";
import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthFailed, AuthSuccess } from "../Components/Redux/Slices/AuthSlice";
const useAuth = async (url, values) => {
  const dispatch = useDispatch();
  try {
    const data = await axios.post(url, { email: values.email, password: values.password });
    dispatch(AuthSuccess(data));
  } catch (err) {
    dispatch(AuthFailed(err.response.data));
  }
};
export default useAuth;
