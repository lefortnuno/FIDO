import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogOutProtection from "./contexts/protected/logout.protected";
import SinInProtected from "./contexts/protected/singin.protected";
import SeConnecter from "./components/login/SeConnecter";
import SEnregistrer from "./components/login/SEnregistrer";
import Utilisateur from "./components/personnes/utilisateurs/Utilisateur";
import Individu from "./components/personnes/individu/Individu";
import Requerant from "./components/personnes/requerant/Requerant";

import Accueil from "./components/accueil/accueil";
import Home from "./components/Home";
import Bureau from "./components/bureau/bureau";
import Procedure from "./components/procedures/procedure";
import PageNotFound from "./contexts/404/page404";

export default function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      <BrowserRouter>
        <Routes>
          <Route index element={<SeConnecter />} />
          {/* <Route index element={<LogOutProtection Cmp={SeConnecter} />} /> */}

          <Route path="/*" element={<PageNotFound />} />

          <Route path="nouveauUtilisateur/" element={<SEnregistrer />} />
          <Route path="utilisateur/" element={<Utilisateur />} />
          <Route path="individu/" element={<Individu />} />
          <Route path="requerant/" element={<Requerant />} />

          <Route path="accueil/" element={<Accueil />} />
          <Route path="home/" element={<Home />} />
          <Route path="procedure/" element={<Procedure />} />
          {/* <Route path="bureau/" element={<SinInProtected Cmp={Bureau} />} /> */}
          <Route path="bureau/" element={<Bureau />} />
          {/* <Route path="bureau/" element={<SinInProtected Cmp={Bureau} />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
