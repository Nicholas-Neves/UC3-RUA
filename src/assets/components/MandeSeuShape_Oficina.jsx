import React from "react";
import styles from "./MandeSeuShape_Oficina.module.css";
import imageShape from "../img/imgem_skate.jpg";

const MandeSeuShape = () => {
  return (
    <section className={styles.mandeseushapeContainer}>
      <h1>Recondicionamento de Shapes Canadenses</h1>
      <h2>Sustentabilidade sobre rodas</h2>

      <div className={styles.containerTopico}>
        <p>Cada skate recondicionado representa um passo a favor do planeta.</p>
      </div>
      <div className={styles.containerTopico}>
        <p>
          Menos lixo, corte de árvores e mais consciência ecológica sobre
          impacto no meio ambiente.
        </p>
      </div>
      <div className={styles.containerTopico}>
        <p>
          {" "}
          Reaproveitando shapes, diminuímos a demanda por novas madeiras,
          ajudando a proteger florestas e a biodiversidade.
        </p>
      </div>
      <div className={styles.containerInfo}>
        <h2>+1.500</h2>
        <p>Shape salvos</p>
        <h2>+6.475</h2>
        <p>Arvores Preservadas</p>
        <h2>100%</h2>
        <p>Satisfação</p>
      </div>
    </section>
  );
};

export default MandeSeuShape;
