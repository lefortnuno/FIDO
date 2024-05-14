import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  const onSubmit = () => {
    loginWithRedirect()
      .then(() => {
        setRedirecting(true);
        localStorage.setItem("isLog", "true"); // Stockez la valeur comme chaîne
      })
      .catch((error) => {
        toast.error(`Erreur lors de la connexion : ${error.message}`);
      });
  };

  const goIN = () => {
    setRedirecting(false);
    navigate("/bureau");
    toast.success(`Connexion réussie`);
  };

  // Récupérer la valeur de isLog
  const isLogged = localStorage.getItem("isLog");

  return (
    <> 
    
    {/* <h6>{isLogged}</h6> */}
      {isLogged === "true" ? (
        <span onClick={goIN}>ENTREZ</span>
      ) : (
        <span onClick={onSubmit}>Se connecter</span>
      )}
    </>
  );
};

export default LoginButton;
