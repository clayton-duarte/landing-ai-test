import React from "react";
import { NextPage } from "next";
import Axios from "axios";

import PreviewFooter from "../components/PreviewFooter";
import PreviewHeader from "../components/PreviewHeader";
import SectionTitle from "../components/SectionTitle";
import PreviewBody from "../components/PreviewBody";
import Template from "../components/Template";
import MainView from "../components/MainView";
import Toolbar from "../components/Toolbar";
import PreView from "../components/PreView";
import Button from "../components/Button";
import Image from "../components/Image";

interface HomePageProps {
  images: string[];
}

const HomePage: NextPage<HomePageProps> = ({ images }) => {
  return (
    <Template>
      <Toolbar>
        <SectionTitle>Toolbar</SectionTitle>
      </Toolbar>
      <MainView>
        <SectionTitle>MainView</SectionTitle>
      </MainView>
      <PreView>
        <PreviewHeader>
          <SectionTitle>Preview</SectionTitle>
        </PreviewHeader>
        <PreviewBody>
          {images.map((src, index) => (
            <Image key={src + index} src={src} />
          ))}
        </PreviewBody>
        <PreviewFooter>
          <Button>submit</Button>
        </PreviewFooter>
      </PreView>
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
