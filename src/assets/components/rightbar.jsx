import React from 'react';
import './rightbar.css';

export default function Rightbar() {
  return (
    <div className="rightbar">
      {/* Eventos e Rolês */}
      <div className="right-section">
        <h3>Corres de agora</h3>
        <div className="event">
          <div className="square1"></div>
          <div>
            <p><strong>Rolê no Centro</strong></p>
            <p>Hoje - 19h</p>
          </div>
        </div>
        <div className="event">
          <div className="square2"></div>
          <div>
            <p><strong>Comp Zona Leste</strong></p>
            <p>Amanhã - 14h</p>
          </div>
        </div>
      </div>

      {/* Skaters em Alta */}
      <div className="right-section">
        <h3>Skaters em Alta</h3>
        <div className="user">
          <div className="square3"></div>
          <p>@sk8artista</p>
        </div>
        <div className="user">
          <div className="square4"></div>
          <p>@shapequeen</p>
        </div>
      </div>

      {/* Sugestões de Artistas */}
      <div className="right-section">
        <h3>Sugestões de Artistas</h3>
        <div className="user">
          <div className="square5"></div>
          <p>@grafiteirox</p>
        </div>
        <div className="user">
          <div className="square6"></div>
          <p>@deckcrazy</p>
        </div>
      </div>

      {/* Tags Populares */}
      <div className="right-section">
        <h3>Tags Populares</h3>
        <div className="tag">#grafite</div>
        <div className="tag">#shapeart</div>
        <div className="tag">#rolênoturno</div>
        <div className="tag">#skatelife</div>
      </div>
    </div>
  );
};