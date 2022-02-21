import React, { useState, useEffect } from "react";
import classes from "../../Styles/Tables/Table.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Table = () => {
  const [organization, setOrganization] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: organizations } = await axios.get("/organization/");
        setOrganization(organizations.data.Orgs);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  let content = (
    <div className='row mt-5 g-3'>
      {organization.length > 0 &&
        organization.map((Org) => (
          <div className='col-lg-4'>
            <div className='card p-2' id={classes["Card"]}>
              <div className='card-body'>
                <div className='card-title' id={classes["card-title"]}>
                  {Org.name}
                </div>
                <div className={classes["email"]}>{Org.email}</div>
                <div className='d-flex justify-content-between cred'>
                  <div className={classes["credentialsNo"]}>No of Credentials</div>
                  <div className={classes.detailsNo}>{organization.length}</div>
                </div>
                <Link to={`/details/${Org._id}`} className={classes["link"]}>
                  <button className={classes["button"]}>view Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
  if (isLoading) {
    content = <h6>loading...</h6>;
  }
  return <div className='container'>{content}</div>;
};

export default Table;
