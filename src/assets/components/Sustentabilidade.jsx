import Styles from "./Sustentabilidade.module.css";
import { Link } from 'react-router-dom';

function Sustentabilidade() {
  return (
    <main>
      <div className={Styles.sus}>
        <h1>Sustentabilidade</h1>
        <p>
          Na RUA, visamos a saúde do planeta a todo<br />
          custo. Com isso em mente, trouxemos uma<br />
          forma inovadora de sustentabilidade. Visite<br />
          nossa oficina para entender melhor como<br />
          recondicionamos nossos shapes.
        </p>
        <button>
        <Link to="/Oficina">Saiba mais</Link>
        </button>
      </div>
    </main>
  );
}

export default Sustentabilidade;
