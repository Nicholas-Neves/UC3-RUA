import React from "react";
import "./notificacoes.css";

export default function Notificacoes() {
  return (
    <div className="notificacoes">
      <h2 className="titulo">Notificações</h2>

      <div className="notificacao">
        <div className="not-icon1" />
        <div className="not-texto">
          <p><strong>@graffiteiroX</strong> curtiu seu post!</p>
          <span>há 3 minutos</span>
        </div>
      </div>

      <div className="notificacao">
        <div className="not-icon" />
        <div className="not-texto">
          <p><strong>@loka_do_spray</strong> comentou: "Ficou foda!"</p>
          <span>há 15 minutos</span>
        </div>
      </div>

      <div className="notificacao">
        <div className="not-icon2" />
        <div className="not-texto">
          <p><strong>@nick_royal</strong> começou a te seguir.</p>
          <span>há 1 hora</span>
        </div>
      </div>
    </div>
  );
}