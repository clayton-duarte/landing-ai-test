import React, { FunctionComponent, useEffect, useRef } from "react";
import { RiCheckLine } from "react-icons/ri";
import styled from "styled-components";

import { useStateHook } from "../providers/state";
import PreviewWrapper from "./PreviewWrapper";
import PreviewFooter from "./PreviewFooter";
import ImageWrapper from "./ImageWrapper";
import PreviewBody from "./PreviewBody";
import Button from "./Button";
import Image from "./Image";

const ActiveIcon = styled(RiCheckLine)<{ disabled: boolean }>`
  filter: drop-shadow(${(props) => props.theme.SHADOW_ALT});
  transform: scale(${(props) => (props.disabled ? 0 : 1)});
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
  const {
    setSelectedImage,
    selectedImage,
    setImageRef,
    imageRef,
    regions,
  } = useStateHook();

  const handleClickImage = (index: number) => () => {
    setSelectedImage(index);
  };

  const handleClickSubmit = () => {
    // TODO > validation
    console.log(JSON.stringify(regions, null, 2));
  };

  const renderImage = (src: string, index: number) => {
    const imageElementRef = useRef();

    useEffect(() => {
      if (imageElementRef.current) {
        const currentImageRef = imageRef;
        currentImageRef[index] = imageElementRef.current;
        setImageRef([...currentImageRef]);
      }
    }, [imageElementRef.current]);

    return (
      <ImageWrapper
        onClick={handleClickImage(index)}
        ref={imageElementRef}
        key={src + index}
        role="button"
      >
        <Image src={src}></Image>
        <ActiveIcon disabled={selectedImage !== index} />
      </ImageWrapper>
    );
  };

  return (
    <PreviewWrapper>
      <PreviewBody>{images.map(renderImage)}</PreviewBody>
      <PreviewFooter>
        <Button onClick={handleClickSubmit}>submit</Button>
      </PreviewFooter>
    </PreviewWrapper>
  );
};

export default Preview;
