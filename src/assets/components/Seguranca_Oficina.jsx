import styles from './Seguranca_Oficina.module.css';
import garantiaIcon from '../img/Icone_garantia.png';
import suporteIcon from '../img/Icone_suporte.png';
import qualidadeIcon from '../img/Icone_qualidade.png';

export default function Seguranca_Oficina() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        {/*cores diferentes*/}
        <h2 className={styles.tituloPrincipal}>Segurança </h2>
        <span className={styles.destaque}>Você e nós</span>
        
        <div className={styles.beneficios}>
          <div className={styles.beneficio}>
            <div className={styles.iconeContainer}>
              <img src={garantiaIcon} alt="Ícone de garantia" className={styles.icone} /> {/*icone */}
            </div>
            <h3 className={styles.titulo}>Garantia</h3> {/*titulo*/}
            <p className={styles.descricao}>Oferecemos garantia de 30 dias para devolução ou trocas, garantindo sua satisfação total.</p>
          </div>

          <div className={styles.beneficio}>
            <div className={styles.iconeContainer}>
              <img src={suporteIcon} alt="Ícone de suporte" className={styles.icone} /> {/*icone */}
            </div>
            <h3 className={styles.titulo}>Suporte</h3> {/*titulo*/}
            <p className={styles.descricao}>Nossa time de suporte está disponível para resolver suas dúvidas e problemas rapidamente.</p>
          </div>

          <div className={styles.beneficio}>
            <div className={styles.iconeContainer}>
              <img src={qualidadeIcon} alt="Ícone de qualidade" className={styles.icone} /> {/*icone*/}
            </div>
            <h3 className={styles.titulo}>Qualidade</h3>{/*titulo*/}
            <p className={styles.descricao}>Garantimos produtos de alta qualidade, com os melhores materiais e processos rigorosos.</p>
          </div>
        </div>
      </section>
    </div>
  );
}