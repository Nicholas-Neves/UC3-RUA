import Styles from './Skates.module.css'
import Quadrado from './Quadrado'
import SHAPE1 from '../img/SHAPE1.png'
import SHAPE5 from '../img/SHAPE5.png'
import SHAPE6 from '../img/SHAPE6.png'

function Skates() {
    return (
        <section className={Styles.quadrado}>
            
           
            <div className={Styles.caixa}>
            <Quadrado 
              imagem={SHAPE1} 
              titu="Shape Profissional maple (Recondicionado)" 
              promo="R$ 580.00" 
              preco="R$ 250.00" 
              desc="5x de 50 sem juros" 
              
            />
            <Quadrado 
              imagem={SHAPE5} 
              titu="Shape Profissional maple (Recondicionado)" 
              promo="R$ 300.00" 
              preco="R$ 200.00" 
              desc="5x de 50 sem juros" 
             
            />
            <Quadrado 
              imagem={SHAPE6} 
              titu="Shape Profissional maple (Recondicionado)"
              promo="R$ 350.00" 
              preco="R$ 150.00" 
              desc="5x de 50 sem juros" 
              
            />

            </div>
         
            
        </section>



    )
}
export default Skates;