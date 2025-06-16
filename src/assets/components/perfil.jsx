import React from "react";
import "./perfil.css";

export default function Perfil() {
  return (
    <div className="perfil">
      <div className="banner" />
      
      <div className="perfil-topo">
        <div className="foto-perfil" />
        <div className="botao-editar">Editar perfil</div>
      </div>

      <div className="perfil-info">
        <h2>Débora</h2>
        <p className="user">@dborah</p>
        <p className="bio">Fazendo os outros se virarem nas ruas e nos códigos 🛹💻✨</p>

        <div className="stats">
          <span><strong>1.205</strong> seguindo</span>
          <span><strong>9.873</strong> seguidores</span>
        </div>
      </div>

      <div className="abas">
        <div className="aba ativa">Posts</div>
        <div className="aba">Reposts</div>
        <div className="aba">Mídia</div>
        <div className="aba">Curtidas</div>
      </div>
    <section className="conteudo">
        <article className="post">
            <div className="post-header">
                <div className="nickicon" />
                <div>
                <div className="display">Débora</div> 
                <div className="username">@dborah</div>
                <p className="text">
                    Primeiro skate do gordão, o barato é loco — Deus abençoe 🔥
                </p>
                </div>
            </div>

            <div className="nickimage" />

            <div className="post-actions">
                <div className="icon-like" />
                <div className="icon-comment" />
                <div className="icon-share" />
            </div>
        </article>
    </section>

    </div>
  );
}
