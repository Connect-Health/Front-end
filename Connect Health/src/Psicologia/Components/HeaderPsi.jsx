import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 px-10 z-50 bg-white/0 backdrop-blur-3xl'>
        <Link to='/' className='font-semibold text-white text-lg hover:text-psi w-6 transition duration-300 hover:scale-110'>
            <span className='text-psi hover:text-white w-6 transition duration-300 hover:scale-110 '>Connect</span>
            Health
        </Link>

        <h2 className='text-white font-bold uppercase text-base ml-80 hover:scale-110 hover:text-psi transition duration-300'>Psicologia</h2>

        <div className='flex gap-5 z-10 '>
            <Link to='/nutricao' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Nutricao</Link>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Feed de Noticias</h2>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>

        </div>
    </div>

    
  )
}

export default Header