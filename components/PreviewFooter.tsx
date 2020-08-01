import styled from "styled-components";

export default styled.footer`
  padding: ${(props) => props.theme.SPACING};
  background: ${(props) => props.theme.BG};
  position: sticky;
  display: grid;
  z-index: 99;
  bottom: 0;
  @media (min-width: ${(props) => props.theme.MD}) {
    box-shadow: 0 0 1rem 1rem ${(props) => props.theme.BG};
  }
`;
