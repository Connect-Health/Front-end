import React from 'react'
import CardAvaliacao from './CardAvaliacao'

const Avaliacoes = ({profissional}) => {
  return (
    <div className=''>
        <div className='ml-12 mr-10 max-md:m-0'>
          <h2 className='text-2xl font-bold text-azulsite/70 max-md:text-center'>Avaliações mais recentes</h2>
          <p className='text-black/60 font-semibold mt-3 max-md:text-center max-md:w-4/5 max-md:m-auto '>Confira aqui os feedbacks dos pacientes que já passaram com <span className='text-black font-bold'>{profissional.nome}</span> </p>
        </div>

        <CardAvaliacao/>
        <CardAvaliacao/>
    </div>
  )
}

export default Avaliacoes