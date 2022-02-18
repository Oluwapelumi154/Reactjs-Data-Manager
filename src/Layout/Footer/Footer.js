import React from "react";
import classes from "../../Styles/Footer/footer.module.css";
const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className={classes.footerCont}>
      <footer>&copy;{year}</footer>
    </div>
  );
};

export default Footer;
