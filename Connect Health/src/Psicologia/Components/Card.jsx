import React from 'react';
import Rating from '@mui/material/Rating';

const Card = ({ profissional }) => {
  const MAX_ESPECIALIDADES = 3;
  const especiaisRestantes = profissional.especialidade.length - MAX_ESPECIALIDADES;

  const descricaoProfissional = profissional.descricao

  return (
    <div key={profissional.id} className='flex rounded-2xl border-2 bg-[#F5F5F5] bg-opacity-50 border-[#8f3bfd] box-content'>
      <div className='w-[25%] border-r border-psi flex flex-col'>
        <img src={profissional.avatar} className='m-auto mt-3 rounded-xl w-24 h-auto' />

        <div className='mt-5'>
          <h4 className='text-center font-semibold'>Duração:</h4>
          <p className='text-center font-bold text-lg'>{profissional.duracao}min</p>
        </div>
        <Rating className='mt-2 self-center' name="size-large" value={profissional.avaliacao}  precision={0.1} readOnly size="small" />

        <div className='mt-4 mb-2'>
          <h4 className='text-center font-semibold'>Consulta:</h4>
          <p className='text-center font-bold text-2xl mt-2'>{profissional.preco}</p>
          
        </div>
    


      </div>

      <div className='w-[75%] '>
        <div className='w-[90%] h-full m-auto flex flex-col justify-between items-center'>
          <h2 className='mt-4 font-semibold text-2xl text-center text-psi'>{profissional.nome} <span>
              {profissional.sobrenome}</span>
          </h2>

          <div className='flex flex-wrap bg-[#e2e2e2] rounded-xl gap-1 justify-center'>
            {profissional.especialidade.length > MAX_ESPECIALIDADES ? (
              <div className='flex flex-wrap bg-[#d0ade7] py-3 rounded-xl px-2 gap-2 justify-evenly'>
                {profissional.especialidade.slice(0, MAX_ESPECIALIDADES).map((especial) => (
                  <p key={especial} className='border w-fit rounded-lg px-2 bg-white'>{especial}</p>
                ))}
                <span className='border w-fit rounded-lg px-2 self-end bg-white'>{`+${especiaisRestantes}`}</span>
              </div>
            ) : (
              <div className='flex flex-wrap bg-[#D7F2E0] py-3 rounded-xl px-2 gap-2'>
                {profissional.especialidade.map((especial) => (
                  <div>
                    <span className='border w-fit rounded-lg px-2 bg-white py-1' key={especial}>{especial}</span>
                  </div>
                ))}
              </div>
            )
            }
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

          <button className=' px-3 my-3 py-1.5 rounded-2xl bg-psi bg-opacity-80 font-medium text-white'>Saiba mais</button>
        </div>

      </div>
    </div>
  );
};

export default Card;