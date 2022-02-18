import Axios from "axios";
import React, { useState } from "react";
const getRequest = async (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const token = localStorage.getItem("token");
  try {
    const data = await Axios.get(url, {
      headers: {
        "x-auth-token": `Bearer ${token}`,
      },
      setData(data)
 })
  } catch (err) {
    setError(err.response.data)
  }
  return {data,isError}
};
export default getRequest;