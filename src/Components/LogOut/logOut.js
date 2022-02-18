import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthLogOut } from "../Redux/Slices/AuthSlice";
const LogOut = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthLogOut());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, [dispatch]);
  return <Navigate to='/login' />;
};
export default LogOut;
