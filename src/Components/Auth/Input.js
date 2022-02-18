import React from "react";
import classes from "../../Styles/Auth/Input.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const Input = (props) => {
  const { formik, id, type, label, name } = props;
  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]}>{props.label}</label>
      <input
        id={id}
        type={type}
        className={formik.errors[name] && formik.touched[name] ? classes["form-control-invalid"] : classes["form-control"]}
        {...formik.getFieldProps(id)}></input>
      <ErrorMessage className={classes["validation-Message"]} formik={formik} name={name} />
    </div>
  );
};

export default Input;
