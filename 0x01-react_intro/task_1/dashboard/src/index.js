import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotification = ReactDOM.createRoot(document.getElementById("root-notifications"));
rootNotification.render(
  <React.StrictMode>
      <Notifications />
  </React.StrictMode>
);
reportWebVitals();
