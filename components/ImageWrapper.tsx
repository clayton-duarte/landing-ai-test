import styled from "styled-components";

export default styled.div`
  transition: 0.2s ease;
  position: relative;
  overflow: visible;
  max-width: 320px;
  display: grid;
  height: auto;
  width: 60vw;
  @media (min-width: ${(props) => props.theme.MD}) {
    max-width: 100%;
    width: 100%;
  }
  &[role="button"]:hover {
    transform: scale(1.025);
  }
`;
