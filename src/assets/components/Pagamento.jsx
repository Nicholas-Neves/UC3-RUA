import { useState } from 'react';
import Styles from './Pagamento.module.css';
import { Link } from 'react-router-dom';

function Pagamento() {
  const [confirmado, setConfirmado] = useState(false);

  const confirmarPagamento = (e) => {
    e.preventDefault(); // evita recarregar a página
    setConfirmado(true);
  };

  return (
    <div className={Styles.bgWrapper}>
    <section className={Styles.fundo}>
      {confirmado ? (
        <div className={Styles.confirmacao}>
          <h2>✅ Pagamento confirmado!</h2>
          <p>Obrigado pela sua compra!</p>
          <Link to="/inicio">
          <button className={Styles.botao}>
            Voltar à RUA
          </button>
          </Link>
        </div>
      ) : (
        <form className={Styles.formulario} onSubmit={confirmarPagamento}>
          <div className={Styles.campo}>
            <h1>Cartão de crédito/débito</h1>
            <input type="text" placeholder="Nome do Titular" required />
            <small>Nome do jeito que está no cartão</small>
          </div>

          <div className={Styles.linha}>
            <input className={Styles.cvv} type="text" placeholder="CVV" required />
            <input className={Styles.validade} type="text" placeholder="MM/AA" required />
          </div>

          <div className={Styles.textoAjuda}>
            <small>Data de Validade do Cartão</small>
          </div>

          <div className={Styles.campo}>
            <input type="text" placeholder="Número do Cartão" required />
          </div>

          <div className={Styles.campo}>
            <select required>
              <option value="">Selecione uma opção de parcelas</option>
              <option>1x Parcelas - R$000,00</option>
              <option>2x Parcelas - R$000,00</option>
              <option>3x Parcelas - R$000,00</option>
              <option>4x Parcelas - R$000,00</option>
              <option>5x Parcelas - R$000,00</option>
              <option>6x Parcelas - R$000,00</option>
            </select>
          </div>

          <button type="submit" className={Styles.botao}>
            Confirmar Pagamento
          </button>
        </form>
      )}
    </section>
    </div>
  );
}

export default Pagamento;
