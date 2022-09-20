import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Colors from "./styles/themes";

import { Home } from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
