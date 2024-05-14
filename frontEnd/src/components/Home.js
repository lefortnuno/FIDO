import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => { 
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Redirection après l'authentification...</p>
    </div>
  );
};

export default Home;
