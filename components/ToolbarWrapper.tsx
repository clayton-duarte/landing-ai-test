import styled from "styled-components";

export default styled.nav`
  background: ${(props) => props.theme.PRIMARY};
  box-shadow: ${(props) => props.theme.SHADOW};
  padding: ${(props) => props.theme.SPACING};
  gap: ${(props) => props.theme.SPACING};
  grid-template-columns: repeat(5, auto);
  color: ${(props) => props.theme.BG};
  justify-content: start;
  align-items: center;
  grid-area: toolbar;
  display: grid;
`;
