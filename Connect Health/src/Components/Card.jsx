import React from 'react';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";

const Card = ({ profissional, border, border2, border3, texto, ...props }) => {
  const MAX_ESPECIALIDADES = 3;
  const especiaisRestantes = Math.max(profissional.especialidade.length - MAX_ESPECIALIDADES, 0);

  const descricaoProfissional = profissional.descricao;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profissional/${profissional.id}`);
  };

  const especialidades = profissional.especialidade.map((especial, index) => (
    <p key={index} className='border w-fit rounded-lg px-2 bg-white'>{especial}</p>
  ));

  return (
    <div key={profissional.id} className={`flex rounded-2xl border-2 bg-[#F5F5F5] bg-opacity-50 border-${border} box-content`} {...props}>
      <div className={`w-[25%] border-r border-${border2} flex flex-col`}>
        <img src={profissional.avatar} className='m-auto mt-3 rounded-xl w-24 h-auto' />

        <div className='mt-5'>
          <h4 className='text-center font-semibold'>Duração:</h4>
          <p className='text-center font-bold text-lg'>{profissional.duracao}min</p>
        </div>
        <Rating className='mt-2 self-center' name="size-large" value={profissional.avaliacao}  precision={1} readOnly size="small" />

        <div className='mt-4 mb-2'>
          <h4 className='text-center font-semibold'>Consulta:</h4>
          <p className='text-center font-bold text-2xl mt-2'>{profissional.preco}</p>
        </div>
      </div>

      <div className='w-[75%] '>
        <div className='w-[90%] h-full m-auto flex flex-col justify-between items-center'>
          <h2 className={`mt-4 font-semibold text-2xl text-center text-${texto}`}>{profissional.nome} <span>
            {profissional.sobrenome}</span>
          </h2>

        <div className={`flex flex-wrap bg-${border3} rounded-xl gap-1 justify-center`}>
          {profissional.especialidade.length > MAX_ESPECIALIDADES ? (
            <div className={`flex flex-wrap bg-${border3} py-3 rounded-xl px-2 gap-2 justify-evenly`}>
              {profissional.especialidade.slice(0, MAX_ESPECIALIDADES).map((especial, index) => (
                <p key={index} className='border w-fit rounded-lg px-2 bg-white'>{especial}</p>
              ))}
              <span className='border w-fit rounded-lg px-2 self-end bg-white'>{`+${especiaisRestantes}`}</span>
            </div>
          ) : (
            <div className={`flex flex-wrap bg-${border3} py-3 rounded-xl px-2 gap-2`}>
              {profissional.especialidade.map((especial, index) => (
                <div key={index}>
                  <span className='border w-fit rounded-lg px-2 bg-white py-1'>{especial}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4 className='text-center text-lg mt-3'>Sobre mim:</h4>
          <p className=''>{descricaoProfissional.length > 175 ? (
            <span>{descricaoProfissional.substring(0, 175) + '...'}</span>
          ) : (
            <span>{descricaoProfissional}</span>
          )}

          </p>
        </div>

        <button onClick={handleClick} className={`px-3 my-3 py-1.5 rounded-2xl bg-${border2} bg-opacity-80 font-medium text-white`}>Saiba mais</button>
      </div>
      </div>
    </div>
  );
};

export default Card;