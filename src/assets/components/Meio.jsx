import Styles from './Meio.module.css'
import foto from '../img/foto.png'
import Faixa from '../img/Faixa.png'



function Meio() {
    return (
        <section className={Styles.fundo}>
            
            <h2 className='moda'>Street Feminino</h2>

            <div className={Styles.rede}>
             
           
            <iframe className={Styles.video}  src="https://www.youtube.com/embed/mVMqKMKairQ?si=0lQZ5Nf_QoYxemK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
             

                <img className={Styles.fotoPrincipal} src={foto} alt="imagem" />

            </div>

            <p className='disc'>O STU (Skate Total Urbe) é o principal circuito profissional de skate do Brasil, reconhecido internacionalmente. Com etapas em diversas cidades, o campeonato reúne os maiores nomes do street e do park, promovendo não só a performance de alto nível, mas também a cena urbana e a cultura do skate nacional.</p>

            <div className={Styles.faixa}>
                <img src={Faixa} alt="imagem" />
            </div>


            
        </section>



    )
}
export default Meio;
