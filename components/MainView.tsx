import React, { FunctionComponent } from "react";

import { useStateHook } from "../providers/state";
import MainViewWrapper from "./MainViewWrapper";
import SectionTitle from "./SectionTitle";
import ImageWrapper from "./ImageWrapper";
import Image from "./Image";

interface MainViewProps {
  images: string[];
}

const MainView: FunctionComponent<MainViewProps> = ({ images }) => {
  const { selectedImage } = useStateHook();

  return (
    <MainViewWrapper>
      <SectionTitle>Selected Image: {images[selectedImage]}</SectionTitle>
      <ImageWrapper>
        <Image src={images[selectedImage]} />
      </ImageWrapper>
    </MainViewWrapper>
  );
};

export default MainView;
