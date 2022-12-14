import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Colors from "./styles/themes";

import { Search } from "./pages/search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <Search />
    </ThemeProvider>
  </React.StrictMode>
);
