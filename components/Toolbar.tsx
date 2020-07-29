import styled from "styled-components";

export default styled.nav`
  background: ${(props) => props.theme.PRIMARY};
  padding: ${(props) => props.theme.SPACING};
  color: ${(props) => props.theme.BG};
  grid-area: toolbar;
  display: grid;
`;
