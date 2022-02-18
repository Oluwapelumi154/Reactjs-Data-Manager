import React from "react";

const ErrorMessage = ({ formik, name, className }) => {
  return <>{formik.touched[name] && formik.errors[name] ? <div className={className}>{formik.errors[name]}</div> : null}</>;
};

export default ErrorMessage;
