import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-eg8kr7ss2ob6v7gi.us.auth0.com"
    clientId="wH6D87x2WZ4gDbpSWqlvVuwtF8j8Ze90"
    authorizationParams={{
      redirect_uri: window.location.origin, 
    }}
  >
    <App />
  </Auth0Provider>
);
