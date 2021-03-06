import reducers, { initialState } from "app/redux/reducers/Reducers";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

// Create middlewares
const middlewares = [];

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

// Create store
const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middlewares)),
);

const action = (type: any, payload: any) => store.dispatch({ type, payload });

// Export history and store
export { store, action };
