import styled from "styled-components";

export default styled.main`
  grid-template-areas:
    "toolbar preview"
    "main preview";
  grid-template-columns: 1fr ${(props) => props.theme.XS};
  grid-template-rows: auto 1fr;
  display: grid;
`;
