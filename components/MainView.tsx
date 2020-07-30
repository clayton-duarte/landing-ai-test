import React, { FunctionComponent } from "react";

import { useStateHook } from "../providers/state";
import MainViewWrapper from "./MainViewWrapper";
import SectionTitle from "./SectionTitle";
import CroppedImage from "./CroppedImage";

interface MainViewProps {
  images: string[];
}

const MainView: FunctionComponent<MainViewProps> = ({ images }) => {
  const { selectedImage } = useStateHook();

  return (
    <MainViewWrapper>
      <SectionTitle>Selected Image</SectionTitle>
      <CroppedImage
        height="calc((100vw - 375px) * 3 /4)"
        width="calc(100vw - 384px)"
        src={images[selectedImage]}
      />
    </MainViewWrapper>
  );
};

export default MainView;
