import React from 'react';

const Card = ({ profissional }) => {
  const MAX_ESPECIALIDADES = 3;
  const especiaisRestantes = profissional.especialidade.length - MAX_ESPECIALIDADES;
  
  return (
    <div key={profissional.id} className='flex rounded-2xl border-2 bg-[#F5F5F5] bg-opacity-50 border-[#94E127] box-content'>
      <div className='w-[25%]'>
        <img src={profissional.avatar} className='m-auto mt-3 rounded-xl w-24 h-auto' />

        <div className='mt-5'>
          <h4 className='text-center font-semibold'>Duração:</h4>
          <p className='text-center font-bold text-lg'>{profissional.duracao}</p>
        </div>

        <div className='mt-7'>
          <h4 className='text-center font-semibold'>Consulta:</h4>
          <p className='text-center font-bold text-2xl mt-2'>{profissional.preco}</p>
        </div>
      </div>

      <div className='w-[75%] '>
        <div className='w-[90%] h-full m-auto flex flex-col justify-between items-center'>
          <h2 className='mt-4 font-semibold text-2xl text-center text-nutri'>{profissional.nome} <span>
              {profissional.sobrenome}</span>
          </h2>

          <div className='flex flex-wrap bg-[#D7F2E0] rounded-xl gap-1 justify-center'>
            {profissional.especialidade.length > MAX_ESPECIALIDADES ? (
              <div className='flex flex-wrap bg-[#D7F2E0] py-3 rounded-xl px-2 gap-2 justify-evenly'>
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
            <p className=''>Olá! Meu nome é Laysa e sou uma nutricionista apaixonada pelo meu trabalho. Eu me formei em uma universidade renomada e tenho experiência em diferentes {profissional.descricao}</p>
          </div>

            <button className='self-end px-3 mr-[-6%] py-1.5 rounded-2xl bg-nutri bg-opacity-80 font-medium text-white'>Saiba mais</button>

        </div>

      </div>
    </div>
  );
};

export default Card;