import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-10'>
        <h1 className='font-semibold text-white text-lg'>
            <span className='text-nutri '>Connect</span>
            Health
        </h1>

        <h2 className='text-white font-bold uppercase text-base ml-28'>Nutrição</h2>

        <div className='flex gap-3 '>
            <h2 className='text-white uppercase text-sm'>Psicologia</h2>
            <h2 className='text-white uppercase text-sm'>Feed de Noticias</h2>
            <h2 className='text-white uppercase text-sm'>Cadastro</h2>

        </div>
    </div>

    
  )
}

export default Header