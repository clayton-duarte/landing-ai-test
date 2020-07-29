import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.PRIMARY};
`;

const Template = styled.main`
  grid-template-areas:
    "toolbar preview"
    "main preview";
  grid-template-columns: 1fr 425px;
  grid-template-rows: auto 1fr;
  display: grid;
  padding: 1rem;
  gap: 1rem;
`;

const Toolbar = styled.nav`
  grid-area: toolbar;
  display: grid;
`;

const MainView = styled.article`
  grid-area: main;
  display: grid;
`;

const PreView = styled.aside`
  grid-area: preview;
  display: grid;
`;

const HomePage: FunctionComponent = () => {
  return (
    <Template>
      <Toolbar>Toolbar</Toolbar>
      <MainView>MainView</MainView>
      <PreView>PreView</PreView>
    </Template>
  );
};

export default HomePage;
