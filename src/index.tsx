import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { App } from "App";

import { Default as Layout } from "layouts/Default";

import { GlobalStyle } from "styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <App />
      <GlobalStyle />
    </Layout>
  </BrowserRouter>
);
