import React, { FunctionComponent } from "react";
import RegionSelect, { Region } from "react-region-select";
import styled from "styled-components";

import { useStateHook } from "../providers/state";
import MainViewWrapper from "./MainViewWrapper";
import SectionTitle from "./SectionTitle";
import Image from "./Image";

const StyledRegionSelect = styled(RegionSelect)`
  max-width: ${(props) => props.theme.SM};
  overflow: hidden;
  div[data-dir],
  div[data-wrapper="wrapper"] {
    // !important overrides the lib component inline styles
    border: 2px dashed ${(props) => props.theme.PRIMARY} !important;
    outline: 2px dashed ${(props) => props.theme.BG} !important;
  }
`;

interface MainViewProps {
  images: string[];
}

const MainView: FunctionComponent<MainViewProps> = ({ images }) => {
  const { selectedImage, regions, setRegions } = useStateHook();

  const handleChange = (newRegions: Region[]) => {
    const updatedRegions = regions;
    updatedRegions[selectedImage] = newRegions;
    setRegions([...updatedRegions]);
  };

  return (
    <MainViewWrapper>
      <SectionTitle>Selected Image: {images[selectedImage]}</SectionTitle>
      <StyledRegionSelect
        regions={regions[selectedImage]}
        onChange={handleChange}
      >
        <Image src={images[selectedImage]} />
      </StyledRegionSelect>
    </MainViewWrapper>
  );
};

export default MainView;
