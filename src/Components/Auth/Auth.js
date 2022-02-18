import React, { useState } from "react";
import Input from "./Input";
import classes from "../../Styles/Auth/Auth.module.css";
import Button from "../Button/Button";
import { Formik, Form } from "formik";
import { AuthSchema } from "../Schema/schema";
import Spinner from "../Spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AuthSuccess, AuthPending, AuthFail, AuthLogOut } from "../Redux/Slices/AuthSlice";
import jwtDecode from "./jwtDecode";
import checkAuthTimeOut from "./checkAuthTimeOut";
const Auth = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = state;

  const postData = async (values) => {
    try {
      dispatch(AuthPending());
      const { data } = await axios.post("/users/login", { email: values.email, password: values.password });
      dispatch(AuthSuccess(data));
      const tokenExpirationDate = jwtDecode(data.data.token);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      checkAuthTimeOut(tokenExpirationDate.exp, dispatch);
      toast("Login SuccessFul");
    } catch (err) {
      dispatch(AuthFail(err.response.data));
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={AuthSchema}
      onSubmit={(values) => {
        postData(values);
        values.email = "";
        values.password = "";
      }}>
      {(formik) => (
        <div className={classes.container}>
          <ToastContainer />
          <div className={classes.forms}>
            <h1 className={classes["form-title"]}>Login into your Account</h1>
            <Form>
              <Input name='email' type='text' label='Email Address' id='email' formik={formik} placeholder='Email Address' />
              <Input name='password' type='password' label='Password' id='password' formik={formik} placeholder='Password' />
              <Button loading={isLoading}>{isLoading ? <Spinner /> : "Login"}</Button>
            </Form>
            <div className={classes["form-text"]}>forgot Password?</div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Auth;
