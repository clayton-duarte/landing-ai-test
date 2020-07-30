import styled from "styled-components";

export default styled.div`
  transition: 0.2s ease;
  position: relative;
  overflow: hidden;
  display: grid;
  &[role="button"]:hover {
    transform: scale(1.025);
  }
`;
