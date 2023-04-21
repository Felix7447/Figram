import React from "react";
import { Layout } from "../../components/Layout";
import { ListOfStories } from "../../components/ListOfStories";
import { ListOfPhotos } from "../../container/withPhotos"

export const Home = () => {
  return (
    <Layout>
      <ListOfStories />
      <ListOfPhotos />
    </Layout>
  );
};
