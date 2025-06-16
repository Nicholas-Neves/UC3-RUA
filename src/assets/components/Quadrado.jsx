import Styles from './Quadrado.module.css'


function Quadrado({ imagem, titu, promo, preco, desc}) {

  return (
    <div className={Styles.produtoItem}>
      <img className={Styles.imagem} src={imagem} alt={titu} />
      <h3 className={Styles.titu}>{titu}</h3>
      <span className={Styles.promo}>{promo}</span>
      <h5 className={Styles.preco}>{preco}</h5>
      <p className={Styles.desc}>{desc}</p>
      
    </div>
  );
}

export default Quadrado;