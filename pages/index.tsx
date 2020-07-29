import React from "react";
import styled from "styled-components";
import { NextPage } from "next";
import Axios from "axios";

const Template = styled.main`
  grid-template-areas:
    "toolbar preview"
    "main preview";
  grid-template-columns: 1fr 425px;
  grid-template-rows: auto 1fr;
  display: grid;
  padding: 1rem;
  gap: 1rem;
`;

const Toolbar = styled.nav`
  grid-area: toolbar;
  display: grid;
`;

const MainView = styled.article`
  grid-area: main;
  display: grid;
`;

const PreView = styled.aside`
  grid-area: preview;
  display: grid;
`;

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
