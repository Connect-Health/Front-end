import React from 'react'
import CardAvaliacao from './CardAvaliacao'

const Avaliacoes = ({profissional}) => {
  return (
    <div className=''>
        <div className='ml-12 mr-10'>
          <h2 className='text-2xl font-bold text-[#55DF5A]'>Avaliações mais recentes</h2>
          <p className='text-black/60 font-semibold mt-3'>Confira aqui os feedbacks dos pacientes que já passaram com <span className='text-black font-bold'>{profissional.nome}</span> </p>
        </div>

        <CardAvaliacao/>
        <CardAvaliacao/>
    </div>
  )
}

export default Avaliacoes