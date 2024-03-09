import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: uiReducer, 
  preloadedState: {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  },
  middleware: [...getDefaultMiddleware(), thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
