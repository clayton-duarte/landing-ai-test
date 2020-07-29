import React, { FunctionComponent } from "react";

import PreviewWrapper from "./PreviewWrapper";
import PreviewFooter from "./PreviewFooter";
import PreviewHeader from "./PreviewHeader";
import SectionTitle from "./SectionTitle";
import PreviewBody from "./PreviewBody";
import Button from "./Button";
import Image from "./Image";

interface PreviewProps {
  images: string[];
}

const Preview: FunctionComponent<PreviewProps> = ({ images }) => {
  return (
    <PreviewWrapper>
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
    </PreviewWrapper>
  );
};

export default Preview;
