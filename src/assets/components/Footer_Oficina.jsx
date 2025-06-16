import styles from './Footer_Oficina.module.css';
import logo from '../img/logorua.png';
import instaIcon from '../img/icone_instagram.png';
import faceIcon from '../img/icone_facebook.png';
import whatsIcon from '../img/icone_whats.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoColumn}>
          <img src={logo} alt="Logo RUA" className={styles.logo} />
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Inicio</h3>
            <ul className={styles.linksList}>

            {/*navegação no footer*/}
              <li><a href="#" className={styles.link}>Arte de RUA</a></li>
              <li><a href="#" className={styles.link}>Voz da RUA</a></li>
              <li><a href="#" className={styles.link}>Drip da RUA</a></li>
              <li><a href="#" className={styles.link}>Oficina da RUA</a></li>
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Contato</h3>
            <ul className={styles.linksList}>

              <li className={styles.contactItem}>
                <span className={styles.contactText}>+55 11 95555-0000</span> {/* numero qualquer*/}
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactText}>ruastreetsuporte@gmail.com</span>
              </li>

              <li className={styles.socialIconsContainer}>
                <a href="#" className={styles.socialLink}>
                  <img src={instaIcon} alt="Instagram" className={styles.socialIcon} /> {/*icone*/}
                </a>
                <a href="#" className={styles.socialLink}>
                  <img src={faceIcon} alt="Facebook" className={styles.socialIcon} />{/*icone*/}
                </a>
                <a href="#" className={styles.socialLink}>
                  <img src={whatsIcon} alt="WhatsApp" className={styles.socialIcon} />{/*icone*/}

                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    {/*direitos*/}
      <div className={styles.copyright}>
        © {new Date().getFullYear()} RUA Streetwear. Todos os direitos reservados.
      </div>
    </footer>
  );
}