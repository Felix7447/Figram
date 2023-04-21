import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ListOfPhotosComponent } from "../components/ListOfPhotosComponent";

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      userId
      likes
    }
  }
`;

export const ListOfPhotos = () => {
  const { loading, error, data = {} } = useQuery(GET_PHOTOS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <ListOfPhotosComponent data={data.photos} />;
};