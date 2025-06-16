import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="logo" />

        <nav className="nav">
          <Link to="/arte" className="nav-item">
            <div className="icon-home" />
            <span>Home</span>
          </Link>
          <Link to="/arte/pesquisar" className="nav-item">
            <div className="icon-search" />
            <span>Pesquisar</span>
          </Link>
          <Link to="/arte/perfil" className="nav-item">
            <div className="icon-perfil" />
            <span>Perfil</span>
          </Link>
          <Link to="/arte/notificacoes" className="nav-item">
            <div className="icon-bell" />
            <span>Notificações</span>
          </Link>
          <Link to="/arte/mensagens" className="nav-item">
            <div className="icon-mail" />
            <span>Mensagens</span>
          </Link>

          <Link to="/inicio" className="logout-button">
            <div className="logout-icon" />
            <span>Sair</span>
          </Link>
        </nav>

        <div className="sidebar-extra">
          <div className="mini-perfil">
            <div className="foto-usuario" />
            <div className="info-usuario">
              <p className="nome">Débora</p>
              <p className="arroba">@dborah</p>
            </div>
          </div>

          <button className="btn-postar">+ Postar</button>

          <div className="frase-missao">
            <p>“RUA é espaço de voz, arte e movimento.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}
