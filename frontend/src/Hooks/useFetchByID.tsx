import { useState, useEffect } from "react";
import axios from "axios";

const useFetchByID = (url: string | number) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`); 
        setData(response.data.data);
        // console.log('data is: ',data)
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log(data.data)
  return { data, loading, error };
};

export default useFetchByID;
