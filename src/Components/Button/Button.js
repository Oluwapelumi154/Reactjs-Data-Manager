import React from "react";
import classes from "../../Styles/Button/Button.module.css";
const Button = (props) => {
  return (
    <button disabled={props.isLoading} type='submit' className={props.loading ? classes.loadingState : classes.button}>
      {props.children}
    </button>
  );
};

export default Button;
