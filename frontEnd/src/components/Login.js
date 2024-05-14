import React, { useState } from "react";

const LoginPage = () => {
  // Définir les états pour les champs de saisie du nom d'utilisateur et du mot de passe
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fonction de gestionnaire d'événements pour la soumission du formulaire de connexion
  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique pour soumettre les données de connexion
    console.log("Nom d'utilisateur:", username);
    console.log("Mot de passe:", password);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
