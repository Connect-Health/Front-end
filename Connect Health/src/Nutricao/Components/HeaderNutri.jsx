import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-10 z-50 bg-white/0 backdrop-blur-md'>
        <Link to='/' className='font-semibold text-white text-lg hover:text-nutri w-6 transition duration-300 hover:scale-110'>
            <span className='text-nutri hover:text-white w-6 transition duration-300 hover:scale-110 '>Connect</span>
            Health
        </Link>

        <h2 className='text-white font-bold uppercase text-base ml-80 hover:scale-110 hover:text-black transition duration-300'>Nutrição</h2>

        <div className='flex gap-5 z-10 '>
            <Link to='/psicologia' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Psicologia</Link>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Feed de Noticias</h2>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>

        </div>
    </div>

    
  )
}

export default Header