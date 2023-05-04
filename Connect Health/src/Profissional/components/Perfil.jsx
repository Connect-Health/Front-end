import React from 'react'
import Fundo from '../../../assets/fundo.png'

const Perfil = () => {
  return (
    <div className='border w-4/5 m-auto h-[90vh] rounded-3xl max-h-screen'>
        <div className='h-1/5 w-full '>
            <img src={Fundo} className='h-full w-full object-cover rounded-tl-3xl rounded-tr-3xl' alt="" />
        </div>
    </div>
  )
}

export default Perfil