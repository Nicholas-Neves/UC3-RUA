import Styles from "./sobre.module.css";
import Timeline from "../components/timeline";
import Header_Oficina from "../components/Header_Oficina";
import Footer from "../components/Footer_Oficina";

const equipe = [
  { nome: "Rafael", classe: Styles.rafael },
  { nome: "Ebson", classe: Styles.ebson },
  { nome: "Gabriela", classe: Styles.gabi },
  { nome: "Nicholas", classe: Styles.nicholas },
  { nome: "Aline", classe: Styles.aline },
  { nome: "Gabriel", classe: Styles.correa },
  { nome: "Amani", classe: Styles.amani },
  { nome: "Vinicius", classe: Styles.vinicius },
];

function Sobre() {
  return (
    <>
    <Header_Oficina />
    <main>
  
      <section className={Styles.imagemContainer}>
        <h1>Quem somos</h1>
        <p>
          Somos o recomeço de um shape esquecido.
          <br />
          Na RUA reciclamos histórias. Recondicionamos shapes de skate com alma,
          prontos para mais manobras — com menos impacto no planeta.
          <br />
          Nada se perde. Tudo se transforma. Bora andar junto?
        </p>
      </section>

      <h1 className={Styles.hhistoria}>Nossa História</h1>
      <Timeline />

      <section className={Styles.mvv}>
        <div className={Styles.fundoMvv}>
          <h1>Nossa Missão</h1>
          <p>
            Nós somos uma empresa que busca incluir o máximo da sustentabilidade
            para o mundo do skate, trazer shapes mais baratos e reconstruídos ao
            mercado, facilitando a compra para pessoas de menor renda.
          </p>

          <h1>Nossa Visão</h1>
          <p>
            Ser referência mundial na coleta e reconstrução de shapes, otimizar
            cada vez mais esses processos e oferecer produtos de altíssima
            qualidade a todos os clientes.
          </p>

          <h1>Nossos Valores</h1>
          <p>
            Oferecer aos clientes um serviço de qualidade e transparência em
            todas as etapas, desde o envio do shape quebrado até a sua
            reconstrução e personalização, além de prezar pela sustentabilidade
            no meio ambiente.
          </p>
        </div>
      </section>

      <section className={Styles.equipe}>
        {equipe.map((membro, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className={membro.classe} />
            <h1>{membro.nome}</h1>
          </div>
        ))}
      </section>
     
    </main>
     <Footer />
     </>
  );
}

export default Sobre;
