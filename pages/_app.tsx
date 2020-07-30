import React, { FunctionComponent } from "react";
import { AppProps } from "next/app";

import ThemeProvider from "../providers/theme";
import StateProvider from "../providers/state";

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  );
};

export default MyApp;
