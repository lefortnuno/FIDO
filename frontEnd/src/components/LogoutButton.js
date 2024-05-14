import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const onLogout = () => {
    logout({ returnTo: window.location.origin })
      .then(() => {
        localStorage.setItem("isLog", false);
      })
      .catch(error => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  return (
    <button onClick={onLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
