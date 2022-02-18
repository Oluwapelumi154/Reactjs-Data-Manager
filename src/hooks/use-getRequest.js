import React, { useState, useEffect } from "react";
import axios from "axios";
const UseFetch = async (url) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setIsError(err.response.message);
      }
    })();
  }, [url]);
  return { data, isError, isLoading };
};
export default UseFetch;
