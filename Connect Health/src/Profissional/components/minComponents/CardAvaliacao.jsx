import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';

const CardAvaliacao = ({ profissional }) => {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const fetchAvaliacoes = async () => {
      try {
        const response = await axios.get(
          `https://connect-health.up.railway.app/avaliacao/profissional/${profissional.profissionalId}`
        );
        setAvaliacoes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAvaliacoes();
  }, [profissional.profissionalId]);

  return (
    <div>
      {avaliacoes.length > 0 ? (
        avaliacoes.map((avaliacao) => (
          <div
            key={avaliacao.id}
            className='drop-shadow-lg w-[90%] pb-6 rounded-2xl mt-10 mx-auto mb-7 bg-white max-md:pb-3 max-md:mb-0 max-md:mt-5'
          >
            <div className='ml-4 pt-4 flex gap-5 '>
              <p className='text-white bg-azulsite/50 w-14 h-14 font-bold rounded-full flex items-center justify-center max-md:w-10 max-md:h-10'>
                {avaliacao.avaliacao}
              </p>
              <p className='w-4/5 mt-5 max-md:mt-1 max-md:text-sm '>{avaliacao.descricao}</p>
            </div>

            <div className='flex justify-around  mt-5 items-center max-md:mt-2'>
              <p className='text-azulsite/70 text-lg font-semibold max-md:text-base'>Avaliação</p>

              <Rating name='text-feedback' value={avaliacao.avaliacao} readOnly precision={0.5} size='small' />
            </div>

            <div className='mt-6 ml-10 max-md:mt-3'>
              <p className='max-md:text-sm text-black/50 font-semibold'>{avaliacao.pacienteId.nome} {avaliacao.pacienteId.sobrenome}</p>
              <p className='max-md:text-sm text-black/50 font-semibold'> {avaliacao.horaAvaliacao} {avaliacao.dataAvaliacao}</p>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-lg font-semibold mt-5'>Nenhuma avaliação ainda.</p>
      )}
    </div>
  );
};

export default CardAvaliacao;