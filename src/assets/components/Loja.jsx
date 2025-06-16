import styles from './Loja.module.css';

function Loja({ imagem, titu, promo, preco, desc, comprar }) {
    
  return (
    <div className={styles.produtoItem}>
      <img className={styles.imagem} src={imagem} alt={titu} />
      <h3 className={styles.titu}>{titu}</h3>
      <span className={styles.promo}>{promo}</span>
      <h5 className={styles.preco}>{preco}</h5>
      <p className={styles.desc}>{desc}</p>
      <button className={styles.comprar}>{comprar}</button>
    </div>
  );
}

export default Loja;