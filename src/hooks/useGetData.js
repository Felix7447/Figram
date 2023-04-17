import { useState, useEffect } from "react";

export const useGetData = (API_URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(API_URL);
        const rta = await data.json();
        setData(rta);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return { data };
};
