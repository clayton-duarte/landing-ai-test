import styled from "styled-components";

export default styled.section`
  box-shadow: ${(props) => props.theme.SHADOW};
  background: ${(props) => props.theme.BG};
  grid-template-rows: 1fr auto;
  grid-area: preview;
  max-height: 100vh;
  overflow: auto;
  display: grid;
`;
