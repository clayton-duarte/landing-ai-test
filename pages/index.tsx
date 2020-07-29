import React from "react";
import { NextPage } from "next";
import Axios from "axios";

import Template from "../components/Template";
import MainView from "../components/MainView";
import Toolbar from "../components/Toolbar";
import PreView from "../components/PreView";

interface HomePageProps {
  images: string[];
}

const HomePage: NextPage<HomePageProps> = ({ images }) => {
  console.log(images);

  return (
    <Template>
      <Toolbar>Toolbar</Toolbar>
      <MainView>MainView</MainView>
      <PreView>PreView</PreView>
    </Template>
  );
};

HomePage.getInitialProps = async () => {
  const getImages = async () => {
    const url = process.env.NEXT_PUBLIC_IMAGES_API as string;
    try {
      const response = await Axios.get<string[]>(url);
      return response.data;
    } catch (error) {
      // TODO > error handling
      return [];
    }
  };

  const images = await getImages();
  return { images };
};

export default HomePage;
