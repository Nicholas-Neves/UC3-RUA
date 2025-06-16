import styles from './ComoFunciona_Oficina.module.css';
import envioIcon from '../img/icone_envio.png';
import avaliacaoIcon from '../img/icone_avaliacao.png';
import restauracaoIcon from '../img/icone_restauracao.png';

export default function ComoFunciona_Oficina() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>

        {/*cores diferentes */}
        <h2 className={styles.titulo}>
          Como funciona? 
        </h2>
    <span className={styles.destaque}>Processo</span>
    
        <div className={styles.etapas}>
          <div className={styles.etapa}>
            <div className={styles.iconeContainer}>
              <img src={envioIcon} alt="Ícone de envio" className={styles.icone} />{/*icone*/}
            </div>

            <h3 className={styles.etapaTitulo}>Envio do Shape</h3>{/*titulo*/}
            <p className={styles.etapaDescricao}>Você embala e envia seu shape quebrado pra gente.</p>{/*desc*/}

          </div>

          <div className={styles.etapa}>
            <div className={styles.iconeContainer}>
              <img src={avaliacaoIcon} alt="Ícone de avaliação" className={styles.icone} />{/*icone*/}
            </div>

            <h3 className={styles.etapaTitulo}>Recebimento e Avaliação</h3>{/*titulo*/}
            <p className={styles.etapaDescricao}>Confirmamos o recebimento e iniciamos a avaliação.</p>{/*desc*/}

          </div>

          <div className={styles.etapa}>
            <div className={styles.iconeContainer}>
              <img src={restauracaoIcon} alt="Ícone de restauração" className={styles.icone} /> {/*icone*/}
            </div>

            <h3 className={styles.etapaTitulo}>Restauração Profissional</h3>{/*titulo*/}
            <p className={styles.etapaDescricao}>Restauramos o skate com carinho e qualidade.</p>{/*desc*/}

          </div>
        </div>

        {/* botão linkado, dentro de a, mandar*/}
        <a
          href="https://www.correios.com.br/"  
          target="_blank"  
          rel="noopener noreferrer"
        >
          <button className={styles.botaoEnviar}>
            Mandar
            <span className={styles.setaBotao}>→</span>
          </button>
        </a>
      </section>
    </div>
  );
}
