import React, { useEffect, useRef } from "react";
import Styles from "./timeline.module.css";

var LinhaDoTempo = () => {
  var circulos = useRef([]);
  var raio = useRef(null);
  var linha = useRef(null);

  var marcos = [
    {
      posicao: 10,
      titulo: "2019 – A faísca",
      descricao: "Um shape rachado, uma ideia na cabeça: e se a gente desse uma segunda vida pra ele?",
      direcao: "cima",
    },
    {
      posicao: 30,
      titulo: "2020 – Iniciativa",
      descricao: "Na garagem, lixas, resina e muita tentativa & erro. Nasceu o primeiro shape recondicionado.",
      direcao: "baixo",
    },
    {
      posicao: 50,
      titulo: "2021 – Do hobby ao propósito",
      descricao: "Criamos a RUA. Nome, logo, oficina e a primeira leva de shapes prontos pra voltar às pistas.",
      direcao: "cima",
    },
    {
      posicao: 70,
      titulo: "2023 – Expansão",
      descricao: "Fechamos com coletivos, skateshops e projetos sociais. Mais shapes, menos descarte.",
      direcao: "baixo",
    },
    {
      posicao: 90,
      titulo: "2025 – Evolução consciente",
      descricao: "Novos processos, menos resíduos, mais estilo. E seguimos rodando com propósito.",
      direcao: "cima",
    },
  ];

  useEffect(() => {
    var raioAnimacao = () => {
      if (!raio.current || !linha.current) return;

      var divTitulo = raio.current.getBoundingClientRect();
      var centroRaio = divTitulo.left + divTitulo.width / 2;

      circulos.current.forEach((circulo, indice) => {
        if (!circulo) return;

        var retanguloCirculo = circulo.getBoundingClientRect();
        var centroCirculo = retanguloCirculo.left + retanguloCirculo.width / 2;

        if (Math.abs(centroRaio - centroCirculo) < 35) {
          circulo.classList.add(Styles.circuloAtivo);
          var conector = circulo.querySelector(`.${Styles.conector}`);
          var caixaInfo = circulo.querySelector(`.${Styles.caixaInfo}`);
          var textoExtra = circulo.querySelector(`.${Styles.textoExtra}`);

          if (conector) conector.classList.add(Styles.conectorAtivo);
          if (caixaInfo) caixaInfo.classList.add(Styles.caixaInfoAtiva);
          if (textoExtra) textoExtra.classList.add(Styles.textoExtraAtivo);
        } else {
          circulo.classList.remove(Styles.circuloAtivo);
          var conector = circulo.querySelector(`.${Styles.conector}`);
          var caixaInfo = circulo.querySelector(`.${Styles.caixaInfo}`);
          var textoExtra = circulo.querySelector(`.${Styles.textoExtra}`);

          if (conector) conector.classList.remove(Styles.conectorAtivo);
          if (caixaInfo) caixaInfo.classList.remove(Styles.caixaInfoAtiva);
          if (textoExtra) textoExtra.classList.remove(Styles.textoExtraAtivo);
        }
      });

      requestAnimationFrame(raioAnimacao);
    };

    raioAnimacao();
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.containerLinha}>
        <div className={Styles.wrapperLinha}>
          <div className={Styles.linha} ref={linha}>
            <div className={Styles.marcos}>
              {marcos.map((marco, indice) => (
                <div
                  key={indice}
                  className={Styles.wrapperCirculo}
                  style={{
                    left: `${marco.posicao}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={Styles.circulo}
                    ref={(el) => (circulos.current[indice] = el)}
                  >
                    <div
                      className={`${Styles.conector} ${
                        Styles[
                          `conector${
                            marco.direcao.charAt(0).toUpperCase() +
                            marco.direcao.slice(1)
                          }`
                        ]
                      }`}
                    >
                      <div
                        className={`${Styles.containerInfo} ${
                          marco.direcao === "cima"
                            ? Styles.containerInfoCima
                            : Styles.containerInfoBaixo
                        }`}
                      >
                        {marco.direcao === "cima" ? (
                          <>
                            <div className={Styles.textoExtra}>
                              {marco.descricao}
                            </div>
                            <div className={`${Styles.caixaInfo} ${Styles.caixaInfoCima}`}>
                              {marco.titulo}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`${Styles.caixaInfo} ${Styles.caixaInfoBaixo}`}>
                              {marco.titulo}
                            </div>
                            <div className={Styles.textoExtra}>
                              {marco.descricao}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className={Styles.raio} ref={raio}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinhaDoTempo;