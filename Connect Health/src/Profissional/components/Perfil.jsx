import React from 'react'
import Fundo from '../../../assets/fundo.png'
import TituloFoto from './TituloFoto'
import Informacoes from './Informacoes'

const Perfil = () => {
  return (
    <div className=' w-4/5 m-auto rounded-3xl mt-10 border '>
        <div className=' w-full'>
            <img src={Fundo} className='h-36 w-full object-cover rounded-tl-3xl rounded-tr-3xl border-b' alt="" />
            <TituloFoto />
            <Informacoes />
        </div>
    </div>
  )
}

export default Perfil