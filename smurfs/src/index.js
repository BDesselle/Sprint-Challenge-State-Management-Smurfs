import React from "react";
import ReactDOM from "react-dom";
// Styles
import "./index.css";
// Components
import App from "./components/App";
//* Importing Provider
import { Provider } from "react-redux";
// * Importing createStore & applyMiddleWare
import { createStore, applyMiddleware } from "redux";
//* Importing Thunk middleware
import thunk from "redux-thunk";
//* Importing my Reducer
import { reducer } from "./store/reducers";
import { logger } from "redux-logger";

//* Using createStore to create a store taking in the reducer and applying Thunk as middleware
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  //* Providing the created store to the nested components (App.js)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
 * Redux Flow
 * - - - - -
 * The Store sets the state based off of the initialState (Store)
 * An Event in the UI triggers an event handler that invokes an Action Creator (View/UI)
 * The Action Creator is executed and Dispatches an Action Type with or without a Payload to the Reducer (Actions.js)
 * The Reducer is invoked by the dispatched action.type & action.payload. The reducer then updates and pushes the state tree to the Store (Reducers.js)
 * The Store sets the state based off of the updated state tree recieved from the reducer (Store)
 * The View recieves and renders the updated state (View/UI)
 */
