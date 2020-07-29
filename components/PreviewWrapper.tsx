import styled from "styled-components";

export default styled.aside`
  box-shadow: ${(props) => props.theme.SHADOW};
  background: ${(props) => props.theme.BG};
  gap: ${(props) => props.theme.SPACING};
  grid-area: preview;
  max-height: 100vh;
  overflow: auto;
  display: grid;
`;
