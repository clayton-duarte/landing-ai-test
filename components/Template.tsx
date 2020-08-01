import styled from "styled-components";

export default styled.main`
  grid-template-areas:
    "toolbar"
    "main"
    "preview";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  display: grid;
  @media (min-width: ${(props) => props.theme.MD}) {
    grid-template-columns: 1fr 320px;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "toolbar preview"
      "main preview";
  }
`;
