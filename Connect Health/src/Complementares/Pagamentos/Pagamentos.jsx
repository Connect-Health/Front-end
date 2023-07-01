import React from "react";
import Header from "../../Components/Header";

import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

import Ajuda from "../../../assets/ajuda.jpg";

function Pagamentos() {
  return (
    <div className="bg-[#f1f1dc]">
      <Header
        health="hover:text-azulsite"
        connect="text-azulsite"
        area="Pagamentos"
        colorArea="hover:text-[#0f44ff]"
        link="/"
        areaNav="Inicio"
        colorAreaNav="Inicio hover:text-[#0f44ff]"
        pai="relative z-10"
      />
      <Menu
        area1="Inicio"
        area2="Area psicologia"
        area3="Area nutrição"
        area4="Feed de noticias"
        home=""
        link2="psicologia"
        link3="nutricao"
        link4="feed"
      />

      <img
        className="absolute top-0 z-0 w-full h-[25rem] object-cover max-md:h-[18rem]"
        src={Ajuda}
      />

      <div className="w-full flex items-center justify-center">
        <h1 className="text-azulsite mt-[24rem] text-[40px]">
          Planos disponíveis
        </h1>
      </div>

      <div>
        <div className="flex justify-center pb-20 max-md:flex-col max-md:items-center ">
          <div className="bg-white w-80 mt-[5rem] rounded-lg h-[300px] flex flex-col items-center max-md:ml-0">
            <br></br>{" "}
            <h1 className="text-black text-[25px] text-center p-5">
              Plano Vitalidade
            </h1>
            <p className="text-black p-2 text-center">
              -2 consultas de psicologia <br />
              - 1 consulta de nutrição
              <br />
              - Consultas de 30 minutos
              <br />- Gerenciamento de consultas
            </p>
            <div className="mt-5">
              <stripe-buy-button
                className=""
                buy-button-id="buy_btn_1NMx6pECStP5J8BJnaXENPCL"
                publishable-key="pk_live_51NLysPECStP5J8BJaNMb21HpesCUF1SRf9Wn6MJjWk3aQN25QR8fCo3JgOOaq9ZTAD7dJEykJbnl8zzENRME40dg00ixAhqnTE"
              ></stripe-buy-button>
            </div>
          </div>

          <div className="bg-white w-80 mt-[5rem] ml-16 rounded-lg h-[300px] flex flex-col items-center max-md:ml-0">
            <h1 className="text-black text-[25px] text-center p-3">
              Plano mensal Equilíbrio
            </h1>
            <p className="text-black p-2 text-center">
              - 3 consultas de psicologia <br />
              - 1 consulta de nutrição
              <br />
              - Consultas de 45 minutos
              <br />- Gerenciamento de consultas
            </p>
            <div className="mt-5">
              <stripe-buy-button
                buy-button-id="buy_btn_1NMZyzECStP5J8BJ2aWFWFHb"
                publishable-key="pk_live_51NLysPECStP5J8BJaNMb21HpesCUF1SRf9Wn6MJjWk3aQN25QR8fCo3JgOOaq9ZTAD7dJEykJbnl8zzENRME40dg00ixAhqnTE"
              ></stripe-buy-button>
            </div>
          </div>

          <div className="bg-white w-80 mt-[5rem] ml-16 rounded-lg h-[300px] flex flex-col items-center max-md:ml-0">
            <h1 className="text-black text-[25px] text-center p-3">
              Plano mensal Excelência
            </h1>
            <p className="text-black p-2 text-center">
              - 4 consultas de psicologia <br />
              - 2 consulta de nutrição
              <br />
              - Consultas de 60 minutos
              <br />- Gerenciamento de consultas
            </p>
            <div className="mt-5">
              <stripe-buy-button
                buy-button-id="buy_btn_1NNEP4ECStP5J8BJJ9Cn6Ek7"
                publishable-key="pk_live_51NLysPECStP5J8BJaNMb21HpesCUF1SRf9Wn6MJjWk3aQN25QR8fCo3JgOOaq9ZTAD7dJEykJbnl8zzENRME40dg00ixAhqnTE"
              ></stripe-buy-button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pagamentos;
