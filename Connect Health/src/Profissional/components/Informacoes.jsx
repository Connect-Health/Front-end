import React from 'react'
import Sobre from './minComponents/Sobre'
import Avaliacoes from './minComponents/Avaliacoes'
import Especialidades from './minComponents/Especialidades'

const Informacoes = ({profissional}) => {
  return (
    <div className='flex gap-[2%] mt-16'>
        <div className='w-1/2 ml-5'>
            <Especialidades profissional={profissional} />
            <Sobre />
        </div>

        <div className='w-1/2'>
            <Avaliacoes />

        </div>
    </div>
  )
}

export default Informacoes