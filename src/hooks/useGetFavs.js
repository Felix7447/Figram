import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const useGetFavs = () => {
  const [favs, setFavs] = useState([]);
  const { data, loading, error } = useQuery(GET_FAVS);

  useEffect(() => {
    setFavs(data);
  }, []);

  return {
    data,
    loading,
    error,
  };
};
