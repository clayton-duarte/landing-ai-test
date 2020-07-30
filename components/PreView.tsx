import React, { FunctionComponent } from "react";
import { RiCheckLine } from "react-icons/ri";
import styled from "styled-components";

import { useStateHook } from "../providers/state";
import PreviewWrapper from "./PreviewWrapper";
import PreviewFooter from "./PreviewFooter";
import CroppedImage from "./CroppedImage";
import PreviewBody from "./PreviewBody";
import Button from "./Button";

const ActiveIcon = styled(RiCheckLine)<{ visible: boolean }>`
  filter: drop-shadow(${(props) => props.theme.SHADOW_ALT});
  transform: scale(${(props) => (props.visible ? 1 : 0)});
  color: ${(props) => props.theme.BG};
  transition: 0.2s ease;
  pointer-events: none;
  place-self: center;
  position: absolute;
  font-size: 10rem;
  z-index: 99;
`;

interface PreviewProps {
  images: string[];
}

const Preview: FunctionComponent<PreviewProps> = ({ images }) => {
  const { selectedImage, setSelectedImage } = useStateHook();

  const handleClickImage = (index: number) => () => {
    setSelectedImage(index);
  };

  return (
    <PreviewWrapper>
      <PreviewBody>
        {images.map((src, index) => (
          <CroppedImage
            onClick={handleClickImage(index)}
            key={src + index}
            height="220px"
            width="320px"
            role="button"
            src={src}
          >
            <ActiveIcon visible={selectedImage === index} />
          </CroppedImage>
        ))}
      </PreviewBody>
      <PreviewFooter>
        <Button>submit</Button>
      </PreviewFooter>
    </PreviewWrapper>
  );
};

export default Preview;
