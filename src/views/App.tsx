import { history, store } from "app/redux/Store";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import MainLayout from "./layouts/MainLayout";

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainLayout />
      </ConnectedRouter>
    </Provider>
  );
};
