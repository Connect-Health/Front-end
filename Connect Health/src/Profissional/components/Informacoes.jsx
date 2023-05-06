import React from 'react'
import Sobre from './minComponents/Sobre'
import Avaliacoes from './minComponents/Avaliacoes'
import Especialidades from './minComponents/especialidades'

const Informacoes = () => {
  return (
    <div className='flex gap-[2%] mt-16'>
        <div className='w-1/2 ml-5'>
            <Especialidades />
            <Sobre />
        </div>

        <Avaliacoes />
    </div>
  )
}

export default Informacoes