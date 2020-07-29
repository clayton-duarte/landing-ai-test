import React from "react";
import { NextPage } from "next";
import Axios from "axios";

import SectionTitle from "../components/SectionTitle";
import Template from "../components/Template";
import MainView from "../components/MainView";
import Toolbar from "../components/Toolbar";
import PreView from "../components/PreView";
interface HomePageProps {
  images: string[];
}

const HomePage: NextPage<HomePageProps> = ({ images }) => {
  return (
    <Template>
      <Toolbar />
      <MainView>
        <SectionTitle>MainView</SectionTitle>
      </MainView>
      <PreView images={images} />
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
