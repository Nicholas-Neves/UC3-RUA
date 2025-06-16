import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Arte from "./assets/pages/arte";
import Sobre from "./assets/pages/sobre";
import MusicPlayer from "./assets/components/MusicPlayer";
import Oficina from "./assets/pages/oficina";
import Loja from "./assets/pages/loja";
import Login from "./assets/pages/Login";
import Inicio from "./assets/pages/inicio";
import Home from "./assets/components/home";
import Voz from "./assets/pages/voz";
import Pagamento from "./assets/components/Pagamento";
import Carrinho from "./assets/pages/Carrinho";
import Perfil from "./assets/components/perfil";
import Notificacoes from "./assets/components/notificacoes";

function App() {
  return (
    <Router>
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/Pagamento" element={<Pagamento />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/oficina" element={<Oficina />} />
        <Route path="/voz" element={<Voz />} />


        <Route path="/arte" element={<Arte />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="notificacoes" element={<Notificacoes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
