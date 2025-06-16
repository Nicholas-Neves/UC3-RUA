import LojaStyles from './Loja.module.css';
import ItemStyles from './Itens.module.css';
import Skate from '../img/SHAPE1.png';
import Skate1 from '../img/SHAPE2.png';
import Skate2 from '../img/SHAPE3.png';
import Skate3 from '../img/SHAPE4.png';
import Skate4 from '../img/SHAPE5.png';
import Skate5 from '../img/SHAPE6.png';

import Loja from './Loja';

function Itens() {
  return (
    <>
      <section className={LojaStyles.Loja}>
        <div style={{ display: 'flex' }}>
          <div className={LojaStyles.Filtro}>
            <h2 className={LojaStyles.titulo}>SHAPES</h2>
            <br />
            <p className={LojaStyles.p1}>Shape com Maple</p>
            <p className={LojaStyles.p2}>Kit com Shape</p>
            <p className={LojaStyles.p3}>Shape Marfim</p>
            <br />

            <h2 className={LojaStyles.h2}>FILTRAR POR</h2>
            <br />
            <h1 className={LojaStyles.titulo2}>MATERIAL</h1>
            <br />
            <label >
            <input className={LojaStyles.input} type="checkbox" name="opcao1" value="fire" />
              Shape Maple
            </label>
            <br /><br />
            <label >
            <input className={LojaStyles.input} type="checkbox" name="opcao2" value="chro" />
              Shape Novo
            </label>
            <br /><br />
            <label >
            <input className={LojaStyles.input} type="checkbox" name="opcao3" value="ed" />
              Shape Marfim
            </label>
          </div>

          <div className={ItemStyles.caixa}>
            <Loja
              imagem={Skate}
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 250.00"
              preco="R$ 150.00"
              desc="5x de 50 sem juros"
              comprar="Comprar"
            />
            <Loja
              imagem={Skate1}
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 250.00"
              preco="R$ 150.00"
              desc="5x de 50 sem juros"
              comprar="Comprar"
            />
            <Loja
              imagem={Skate2}
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 250.00"
              preco="R$ 150.00"
              desc="3x de 50 sem juros"
              comprar="Comprar"
            />
            <Loja
              imagem={Skate3}
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 250.00"
              preco="R$ 150.00"
              desc="3x de 50 sem juros"
              comprar="Comprar"
            />
            <Loja
              imagem={Skate4}
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 250.00"
              preco="R$ 150.00"
              desc="3x de 50 sem juros"
              comprar="Comprar"
            />
            <Loja
              imagem={Skate5}
              titu="Shape Profissional maple (Novo)"
              promo="R$ 500.00"
              preco="R$ 420.00"
              desc="7x de 60 sem juros"
              comprar="Comprar"
            />
          </div>
        </div>
      </section>
      <section className={ItemStyles.faixa}></section>
    </>
  );
}

export default Itens;