import Styles from './Campeonato.module.css'
import games from '../img/games.jpeg'
import stu from '../img/stu.jpeg'
import tampa from '../img/tampa.jpeg'
import dewtour from '../img/dewtour.jpeg'


function Campeonato() {
    return (
        <section className={Styles.fundo}>
            <h1>Campeonatos</h1>


            <img className={Styles.games} src={games} alt="Imagem do campeonato X Games" />
            <img className={Styles.stu} src={stu} alt="Imagem do campeonato STU" />
            <img className={Styles.tampa} src={tampa} alt="Imagem do Tampa Pro Skate" />
            <img className={Styles.dewtour} src={dewtour} alt="Imagem do Dew Tour" />




        </section>



    )
}
export default Campeonato;
