import styled from "styled-components";

export default styled.aside`
  padding: ${(props) => props.theme.SPACING};
  gap: ${(props) => props.theme.SPACING};
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto;
  overflow: auto;
  display: grid;
  height: auto;
  @media (min-width: ${(props) => props.theme.MD}) {
    grid-template-columns: auto;
  }
`;
