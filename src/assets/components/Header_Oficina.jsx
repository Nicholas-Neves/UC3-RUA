import { Link } from 'react-router-dom';
import styles from './Header_Oficina.module.css';
import logoRua from '../img/logorua.png';
import duvidaIcon from '../img/icone_duvida.png';
import carrinhoIcon from '../img/icone_carrinho.png';
import usuarioIcon from '../img/icone_usuario.png';
import configIcon from '../img/icone_config.png';
import lupaIcon from '../img/icone_lupa.png'; 

export default function Header_Oficina() {
  return (
    <header className={styles.header}>
      <div className={styles.topo}>
        <div className={styles.logo}>
          <img src={logoRua} alt="Logo RUA" className={styles.logo} />
        </div>

         {/* pesquisa */}
        <div className={styles.searchContainer}>
        <img src={lupaIcon} alt="Ícone de lupa" className={styles.lupaIcon} />
        <input type="text" placeholder="Pesquisar" />
        </div>

         {/* icones */}
        <div className={styles.icons}>
          <button><img src={duvidaIcon} alt="Dúvida" className={styles.icon} /></button>
          <Link to="/Carrinho"><button><img src={carrinhoIcon} alt="Carrinho" className={styles.icon} /></button></Link>
          <Link to="/login"><button><img src={usuarioIcon} alt="Usuário" className={styles.icon} /></button></Link>
          <button><img src={configIcon} alt="Configurações" className={styles.icon} /></button>
        </div>
      </div>

      {/* links de navefação */}
      <nav className={styles.nav}>
        <ul>
        <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/arte">Arte da RUA</Link></li>
          <li><Link to="/Voz">Voz da RUA</Link></li>
          <li><Link to="/Loja">Drip da RUA</Link></li>
          <li><Link to="/Oficina">Oficina da RUA</Link></li>
          <li><Link to="/sobre">Sobre a RUA</Link></li>
        </ul>
      </nav>
        </ul>
      </nav>
    </header>
  );
}
