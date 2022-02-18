import React from "react";
import classes from "../../Styles/Select/Select.module.css";
import { Field, ErrorMessage } from "formik";
const Select = (props) => {
  return (
    <div className={classes["form-group"]}>
      <label className={classes["form-label"]} htmlFor={props.name}>
        {props.label}
        <Field as='select' name={props.name} className={classes["form-select"]}>
          <option value=' '>Select </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </Field>
        <ErrorMessage name={props.name} />
      </label>
    </div>
  );
};

export default Select;
