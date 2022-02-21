import React, { useEffect, useState } from "react";
import classes from "../../Styles/OrgTable/OrgTable.module.css";
import { FaEye, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const InfoTable = () => {
  const [credentials, setCredentials] = useState([]);
  const history = useParams();
  const { id: orgId } = history;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`/organization/${orgId}`);
        const { data: details } = data;
        console.log(details);
        setCredentials(details.data.org.credentials);
      } catch ({ response }) {
        toast(response.data.message);
      }
    };
    fetchData();
  }, []);
  const deleteData = async (orgId) => {
    const credentialList = credentials.filter((cred) => cred.id !== orgId);
    setCredentials(credentialList);
    try {
      const data = await axios.delete(`/organization/${orgId}`);
      const { data: details } = data;
      console.log(details);
    } catch (err) {}
  };

  const handleButton = () => {
    history("/credentialsForm");
  };
  return (
    <div className='container'>
      <ToastContainer />
      <div className='card p-4 mt-5' id={classes["card"]}>
        <div className='card-body'>
          <div className='card-title' id={classes.cardTitle}>
            Organization Name
          </div>
          <div className='mt-3 d-flex justify-content-between align-items-center flex-wrap'>
            <input type='text' placeholder='Search...' className={classes["form-control"]} />
            <button onClick={handleButton} className={classes.button}>
              Add Credentials
            </button>
          </div>

          <table className='table table-bordered mt-3'>
            <thead>
              <tr>
                <th className={classes.tableHead} scope='col'>
                  #
                </th>
                <th className={classes.tableHead} scope='col'>
                  Username
                </th>
                <th className={classes.tableHead} scope='col'>
                  Password
                </th>

                <th className={classes.tableHead}>IpAddress</th>
                <th className={classes.tableHead} scope='col'>
                  description
                </th>
                <th className={classes.tableHead} colSpan={3} scope='col'>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {credentials.map((cred) => (
                <tr key={cred._id>
                <>
                <th className={classes.tableHead} scope='row'>
                      1
                    </th><td className={classes.tableData}>{cred.username}</td><td className={classes.tableData}>{cred.password}</td><td className={classes.tableData}>{cred.IpAddress}</td><td className={classes.tableData}>{cred.description}</td><td className={classes.tableData}>
                        <div className={classes.iconsEdit}>
                          <FaEye />
                        </div>
                      </td><td className={classes.tableData} onClick={(id) => deleteData(cred._id)}>
                        <div className={classes.iconsDelete}>
                          <FaTrash />
                        </div>
                      </td></>
                  </tr> 
              ))}
              </tbody>

              
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
