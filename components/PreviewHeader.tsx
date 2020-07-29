import styled from "styled-components";

export default styled.header`
  box-shadow: ${(props) => props.theme.SHADOW};
  padding: ${(props) => props.theme.SPACING};
  background: ${(props) => props.theme.BG};
  justify-content: center;
  position: sticky;
  display: grid;
  top: 0;
`;
