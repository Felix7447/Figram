import React from "react";
import { Layout } from "../../components/Layout";
import { ListOfStories } from "../../components/ListOfStories";
import { ListOfPhotos } from "../../components/ListOfPhotos";

export const Home = () => {
  return (
    <Layout>
      <ListOfStories />
      <ListOfPhotos />
    </Layout>
  );
};
