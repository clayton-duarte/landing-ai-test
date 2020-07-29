import React, { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

enum colors {
  PRIMARY = "#00adb5",
  SECONDARY = "#393e46",
  TEXT = "#222831",
  BG = "#fefeff",
}

enum shape {
  BORDER = "2px solid rgba(0, 0, 0, 0.2)",
  SHADOW = "0 0 1rem rgba(0, 0, 0, 0.2)",
  SPACING = "1rem",
  RADIUS = "1rem",
}

export const customTheme = {
  ...colors,
  ...shape,
};

const GlobalStyles = createGlobalStyle`
html,
body,
#__next {
    font-family: Roboto, Oxygen, Ubuntu, sans-serif;
    background: ${(props) => props.theme.BG};
    font-size: 16px;
    display: grid;
    height: 100%;
    margin: 0;
    * {
      box-sizing: border-box;
    }
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
