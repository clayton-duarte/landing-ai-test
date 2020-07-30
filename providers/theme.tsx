import React, { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

enum colors {
  PRIMARY = "#00adb5",
  SECONDARY = "#393e46",
  TEXT = "#222831",
  BG = "#fefeff",
}

enum shape {
  SHADOW = "0px 0px 1rem rgba(0, 0, 0, 0.2)",
  SHADOW_ALT = "0px 0px 1rem rgba(0, 0, 0, 1)",
  SPACING = "1rem",
  BORDER = "none",
}

enum breakpoints {
  LG = "1280px",
  MD = "1024px",
  SM = "768px",
  XS = "375px",
}

export const customTheme = {
  ...breakpoints,
  ...colors,
  ...shape,
};

const GlobalStyles = createGlobalStyle`
html,
body,
#__next {
    font-family: Roboto, Ubuntu, sans-serif;
    background: ${(props) => props.theme.BG};
    font-size: 16px;
    display: grid;
    height: 100%;
    margin: 0;
    * {
      box-sizing: border-box;
    }
    *[role="button"] {
      cursor: pointer;
    }
    svg[role="button"] {
      filter: drop-shadow(${(props) => props.theme.SHADOW_ALT});
      font-size: 1.5rem;
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
