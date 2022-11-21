import { Dispatch } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import reducers from "redux/reducers";
import middleware from "redux/middleware";

const store = configureStore({ reducer: reducers, middleware: middleware });

export interface DispatchProps {
  dispatch: Dispatch;
}

export type RootState = ReturnType<typeof store.getState>;

export default store;
