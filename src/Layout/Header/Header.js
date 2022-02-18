import React from "react";
import classes from "../../Styles/Header/Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const Authenticated = props.isAuthenticated !== null;
  return (
    <nav className={classes["navigationBar"]}>
      <div className={classes["navBrand"]}>Simplex</div>
      <ul className={classes["nav-items"]}>
        <li className={classes["nav-links"]}>
          <NavLink className={(isActive) => (isActive ? classes.isActive : classes.inActive)} to='/logOut'>
            signOut
          </NavLink>
        </li>
        <li className={classes["nav-links"]}>
          <NavLink className={({isActive}) => (isActive ? classes.isActive : classes.inActive)} to='/account'>
            Account Details
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
