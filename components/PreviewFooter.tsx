import styled from "styled-components";

export default styled.footer`
  box-shadow: ${(props) => props.theme.SHADOW};
  padding: ${(props) => props.theme.SPACING};
  background: ${(props) => props.theme.BG};
  position: sticky;
  display: grid;
  bottom: 0;
`;
