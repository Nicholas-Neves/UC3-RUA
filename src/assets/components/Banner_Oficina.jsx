// src/assets/Componentes/Banner_Oficina.jsx
import styles from "./Banner_Oficina.module.css";
import video from "../video/oficinavideo.mp4";

function Banner_Oficina() {
  return (
    <>
    <div className={styles.bannerText}>
          <h1>Oficina</h1>
          <p>Da RUA</p>
        </div>
      <video autoPlay muted playsInline loop>
        <source src={video} type="video/mp4">
        </source>
        
      </video>
      
      
    </>
  );
}

export default Banner_Oficina;
