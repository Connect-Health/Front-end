import React from 'react'
import Fundo from '../../../assets/fundo.png'
import TituloFoto from './TituloFoto'
import Informacoes from './Informacoes'

const Perfil = () => {
  return (
    <div className='border w-4/5 m-auto rounded-3xl'>
        <div className='h-36 w-full '>
            <img src={Fundo} className='h-full w-full object-cover rounded-tl-3xl rounded-tr-3xl' alt="" />
            <TituloFoto />
            <Informacoes />
        </div>
    </div>
  )
}

export default Perfil