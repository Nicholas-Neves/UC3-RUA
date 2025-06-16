import Styles from './Noticias.module.css'
import nt from '../img/nt.png'
import st from '../img/st.png'
import ct from '../img/ct.png'
import sr from '../img/sr.png'

function Noticias() {
  const noticias = [
    {
      imagem: nt,
      titulo: 'STU de Criciúma: Maria Almeida é campeã!',
      descricao: 'Skatista mostrou resiliência e superou a nota de Duda Ribeiro na última volta.',
      data: '30/04/2025',
    },
    {
      imagem: st,
      titulo: 'Isadora Pacheco, única a subir em todos os pódios do parque no STU nacional Criciúma, agora campeã.',
      descricao: 'Skatistas de todo o estado participaram da competição.',
      data: '28/04/2025',
    },
    {
      imagem: ct,
      titulo: 'STU National em Criciúma é marcado por ações de sustentabilidade e vitória de grandes nomes do skate',
      descricao: 'A primeira etapa do ano do STU national foi marcada por ações de sustentabilidade..',
      data: '24/04/2025',
    },
    
    {
        imagem: sr,
        titulo: 'Lixo zero: STU Criciúma será radical também na coleta seletiva de lixo durante os três dias de evento',
        descricao: 'Com atuação de coletores e estrutura consciente evento reforça compromisso ambiental e social em sua quinta edição.',
        data: '17/04/2025',
    },


  ];

  return (
    <section className={Styles.fundo}>
      <div className={Styles.texto}>
        <h1>NOTÍCIAS</h1>
      </div>

      <div className={Styles.grid}>
        {noticias.map((item, index) => (
          <div key={index} className={Styles.card}>
            <img src={item.imagem} alt="skate" className={Styles.imagem} />
            <div className={Styles.conteudo}>
              <h1 className={Styles.titulo}>{item.titulo}</h1>
              <p className={Styles.descricao}>{item.descricao}</p>
              <p className={Styles.data}>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Noticias;
