import React from "react";
import classes from "../../Styles/Tables/Table.module.css";
import { Link } from "react-router-dom";
const Table = () => {
  return (
    <div className='container'>
      <div className='row mt-5 g-3'>
        <div className='col-lg-4'>
          <div className='card p-2' id={classes["Card"]}>
            <div className='card-body'>
              <div className='card-title' id={classes["card-title"]}>
                Organization Name
              </div>
              <div className={classes["email"]}>orebayopelumi@gmail.com</div>
              <div className='d-flex justify-content-between cred'>
                <div className={classes["credentialsNo"]}>No of Credentials</div>
                <div className={classes.detailsNo}>20</div>
              </div>
              <Link to='/details' className={classes["link"]}>
                <button className={classes["button"]}>view Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>Hello</div>
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-title'>Hello</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
