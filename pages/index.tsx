import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.PRIMARY};
`;

export default function Home() {
  return <Title>My page</Title>;
}
