import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import uiReducer, {initialState} from "./reducers/uiReducer";
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: uiReducer, 
  preloadedState: {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
