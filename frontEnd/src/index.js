import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-eg8kr7ss2ob6v7gi.us.auth0.com"
      clientId="wH6D87x2WZ4gDbpSWqlvVuwtF8j8Ze90"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
);

reportWebVitals();
