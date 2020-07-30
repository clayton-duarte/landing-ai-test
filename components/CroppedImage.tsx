import styled from "styled-components";

interface CroppedImageProps {
  height: string;
  width: string;
  src: string;
}

export default styled.div<CroppedImageProps>`
  border-radius: ${(props) => props.theme.SPACING};
  background: ${(props) => props.theme.SECONDARY};
  background-image: url(${(props) => props.src});
  box-shadow: 0 0 0 transparent inset;
  background-position: center center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-height: calc(100vh - 175px);
  max-width: calc(100vw - 375px);
  box-shadow: 0 0 0 transparent;
  background-size: cover;
  transition: 0.2s ease;
  position: relative;
  display: grid;
  &[role="button"]:hover {
    transform: scale(1.025);
  }
`;
