import { store } from "app/redux/Store";
import { history } from "app/views/layouts/Routes";
import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <MainLayout />
      </Router>
    </Provider>
  );
};
