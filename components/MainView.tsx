import React, { FunctionComponent } from "react";
import RegionSelect, { Region } from "react-region-select";
import styled from "styled-components";

import { useStateHook } from "../providers/state";
import MainViewWrapper from "./MainViewWrapper";
import Image from "./Image";

const StyledRegionSelect = styled(RegionSelect)`
  width: ${(props) => props.theme.SM};
  max-width: calc(100% - 2rem);
  overflow: hidden;
  margin: 0 auto;
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
