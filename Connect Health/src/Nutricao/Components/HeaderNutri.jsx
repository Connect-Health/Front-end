import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-10'>
        <h1 className='font-semibold text-white text-lg hover:text-nutri w-6 transition duration-300 hover:scale-110'>
            <span className='text-nutri hover:text-white w-6 transition duration-300 hover:scale-110 '>Connect</span>
            Health
        </h1>

        <h2 className='text-white font-bold uppercase text-base ml-28 hover:scale-110 hover:text-[#000] transition duration-300'>Nutrição</h2>

        <div className='flex gap-3 z-10 '>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Psicologia</h2>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Feed de Noticias</h2>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>

        </div>
    </div>

    
  )
}

export default Header