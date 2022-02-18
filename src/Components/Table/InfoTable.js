import React from "react";
import classes from "../../Styles/OrgTable/OrgTable.module.css";
import { FaEye, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import UseFetch from "../../hooks/use-getRequest";
const InfoTable = () => {
  const history = useNavigate();
  const handleButton = () => {
    history("/credentialsForm");
  };
  const { isLoading, isError, data } = UseFetch("/organization");
  console.log(data, isError, isLoading);
  return (
    <div className='container'>
      <div className='card p-3 mt-5' id={classes["card"]}>
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

          <table class='table table-bordered mt-3'>
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
                <th className={classes.tableHead} colSpan={3} scope='col'>
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className={classes.tableHead} scope='row'>
                  1
                </th>
                <td className={classes.tableData}>Mark</td>
                <td className={classes.tableData}>Otto</td>
                <td className={classes.tableData}>
                  <div className={classes.iconsEdit}>
                    <FaEye />
                  </div>
                </td>
                <td className={classes.tableData}>
                  <div className={classes.iconsDelete}>
                    <FaTrash />
                  </div>
                </td>
              </tr>
              <tr>
                <th className={classes.tableHead} scope='row'>
                  2
                </th>
                <td className={classes.tableData}>Jacob</td>
                <td className={classes.tableData}>Thornton</td>
                <td className={classes.tableData}>@fat</td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
