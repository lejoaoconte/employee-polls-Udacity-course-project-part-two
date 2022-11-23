import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import LoadingBar from "react-redux-loading-bar";

import App from "App";

import { Default as Layout } from "layouts/Default";

import { GlobalStyle } from "styles/GlobalStyles";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import reducers from "redux/reducers";
import middleware from "redux/middleware";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({ reducer: reducers, middleware: middleware });

const ToastItem = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoadingBar style={{ backgroundColor: "#2450b4", height: "5px" }} />
    <ToastItem />
    <BrowserRouter>
      <Layout>
        <App />
        <GlobalStyle />
      </Layout>
    </BrowserRouter>
  </Provider>
);
