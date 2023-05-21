import React from "react";

const Especialidades = ({ profissional }) => {
  

  return (
    <div className="">
      <p className="text-center text-lg mb-1 font-semibold">Sub-categorias que atendo:</p>
      <div className={`w-full flex  bg-azulsite/20 py-2 gap-2 px-3 rounded-3xl drop-shadow-md box-border`}>
        <div className="flex flex-wrap py-3 rounded-xl px-2 gap-2 justify-left max-md:gap-0.5">
          {profissional.especialidade && profissional.especialidade.map((especialidade) => (
          <p key={especialidade.especialidadeId} className="border w-fit rounded-lg px-2 self-end max-md:px-1 max-md:text-sm bg-white">{especialidade.nome}</p>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Especialidades;