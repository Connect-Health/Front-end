import React from 'react';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";

const Card = ({ profissional, border, border2, border3, texto, bg, bg2, areaUrl, ...props }) => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profissional/${areaUrl}/${profissional.profissionalId}`);
  };

  return (
    <div key={profissional.profissionalId} className={`flex rounded shadow-md shadow-cor-primaria/10 bg-[#f3f3f3] bg-opacity-50  box-content`} {...props}>
      <div className={`w-[25%]  border-${border2} ${bg} flex flex-col shadow `}>
        <img src={profissional.urlAvatar} className='m-auto mt-3 rounded-sm shadow-cor-primaria/20 shadow-md w-24 h-24 max-md:w-20 object-cover object-top max-md:object-cover' />

        <div className='mt-5 max-md:mt-2'>
          <h4 className='text-center font-semibold max-md:text-sm opacity-70'>Duração:</h4>
          <p className='text-center font-bold text-lg max-md:text-base'>{profissional.duracao}min</p>
        </div>
        <Rating className='mt-2 self-center' name="size-large" value={profissional.avaliacao}  precision={0.1} readOnly size="small" />

        <div className='mt-4 mb-2 max-md:mt-2'>
          <h4 className='text-center font-semibold max-md:text-sm  opacity-70'>Consulta:</h4>
          <p className='text-center font-bold text-2xl mt-1 italic  max-md:text-lg '>R${profissional.preco},00</p>
        </div>
      </div>

      <div className='w-[75%] '>
        <div className='w-[90%] h-full m-auto flex flex-col justify-between items-center'>
          <h2 className={`mt-4 font-semibold text-2xl text-center max-md:text-base text-${texto}`}>{profissional.nome} <span>
            {profissional.sobrenome}</span>
          </h2>

          <div className={`flex flex-wrap bg-${border3} ${bg2} rounded gap-1 justify-center w-full py-2`}>
            {profissional.especialidade && profissional.especialidade.slice(0, 3).map((especialidade) => (
              <p key={especialidade.especialidadeId} className="shadow-md w-fit rounded px-3 tracking-wider self-end max-md:px-1 max-md:text-sm bg-white max-md:w-fit">{especialidade.nome}</p>
            ))}
            {profissional.especialidade && profissional.especialidade.length > 3 && (
              <span className='shadow w-fit rounded px-2 self-end max-md:px-1 max-md:text-sm bg-white max-md:w-fit'>{`+${profissional.especialidade.length - 3}`}</span>
            )}
          </div>

        <div>
          <h4 className='text-center text-lg mt-3 max-md:text-base'>Sobre mim:</h4>
          <p className='max-md:text-xs tracking-wide'>{profissional.descricao.length > 175 ? (
            <span>{profissional.descricao.substring(0, 150) + '...'}</span>
          ) : (
            <span>{profissional.descricao}</span>
          )}

          </p>
        </div>

        <button onClick={handleClick} className={`px-4 my-3 py-1.5 rounded bg-${border2} bg-opacity-80 font-medium text-white max-md:py-1 max-md:text-sm`}>Saiba mais</button>
      </div>
      </div>
    </div>
  );
};

export default Card;