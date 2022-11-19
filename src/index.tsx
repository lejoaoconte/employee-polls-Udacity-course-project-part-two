import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "App";

import { Default as Layout } from "layouts/Default";

import { GlobalStyle } from "styles/GlobalStyles";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import reducers from "redux/reducers";
import middleware from "redux/middleware";

const store = configureStore({ reducer: reducers, middleware: middleware });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
        <GlobalStyle />
      </Layout>
    </BrowserRouter>
  </Provider>
);
