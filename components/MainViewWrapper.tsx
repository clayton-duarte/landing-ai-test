import styled from "styled-components";

export default styled.section`
  padding: ${(props) => props.theme.SPACING};
  gap: ${(props) => props.theme.SPACING};
  align-content: flex-start;
  grid-area: main;
  display: grid;
`;
