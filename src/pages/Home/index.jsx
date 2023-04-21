import React from "react";
import { useLoaderData } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { ListOfStories } from "../../components/ListOfStories";
import { ListOfPhotos } from "../../container/withPhotos"
import { endpoints } from "../../config/config";

export const Loader = async () => {
  try {
    const data = await fetch(endpoints.categories);
    const response = await data.json();
    return { response };
  } catch (error) {
    console.log(error);
  }
};

export const Home = () => {
  const path = window.location.pathname.slice(8) || '';
  const { response } = useLoaderData();
  const categorySelected = response.filter(category => category.name === path)
  const categoryId = categorySelected[0]?.id;
  return (
    <Layout>
      <ListOfStories />
      <ListOfPhotos categoryId={categoryId} />
    </Layout>
  );
};
