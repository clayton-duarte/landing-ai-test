import styled from "styled-components";

export default styled.button`
  border-radius: ${(props) => props.theme.SPACING};
  background: ${(props) => props.theme.PRIMARY};
  padding: ${(props) => props.theme.SPACING};
  border: ${(props) => props.theme.BORDER};
  color: ${(props) => props.theme.BG};
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:focus {
    outline: none;
  }
`;
