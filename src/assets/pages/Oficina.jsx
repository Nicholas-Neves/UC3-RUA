import React from 'react';
import Header_Oficina from '../components/Header_Oficina';
import Banner_Oficina from '../components/Banner_Oficina';
import MandeSeuShape from '../components/MandeSeuShape_Oficina';
import ComoFunciona_Oficina from '../components/ComoFuncona_Oficina';
import Seguranca_Oficina from '../components/Seguranca_Oficina';
import Footer_Oficina from '../components/Footer_Oficina';



export default function Oficina() {
    return (
      <div className="pagina-oficina">
        <Header_Oficina />
        <Banner_Oficina />
        <MandeSeuShape />
        <ComoFunciona_Oficina />
        <Seguranca_Oficina />
        <Footer_Oficina />
      </div>
    );
  }
  