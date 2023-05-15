import React from "react";

const Especialidades = ({ profissional }) => {
  if (!profissional || !profissional.especialidade) {
    return null; // or you can return a loading indicator
  }

  return (
    <div className='w-full flex flex-wrap bg-nutri/25 py-2 gap-2 px-3 rounded-3xl drop-shadow-md box-border'>
      {profissional.especialidade.map((especial, index) => (
        <span key={index} className='w-fit rounded-lg px-2 bg-white'>{especial}</span>
      ))}
    </div>
  );
};

export default Especialidades;