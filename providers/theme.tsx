import React, { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export enum colors {
  PRIMARY = "#00adb5",
  SECONDARY = "#393e46",
  TEXT = "#222831",
  BG = "#fefeff",
}

export const customTheme = {
  ...colors,
};

const GlobalStyles = createGlobalStyle`
body {
    font-family: Roboto, Oxygen, Ubuntu, sans-serif;
    background: ${(props) => props.theme.BG};
    font-size: 16px;
    margin: 0;
}
`;

const Provider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Provider;
