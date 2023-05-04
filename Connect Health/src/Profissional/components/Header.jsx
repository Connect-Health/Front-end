import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center py-3 px-10 z-50 bg-cor-primaria/10 backdrop-blur-md'>
        <Link to='/nutricao' className='absolute left-5 text-4xl'>{`< `}</Link>
        <Link to='/' className='font-semibold text-white text-lg hover:text-[#303de9] w-6 transition duration-300 hover:scale-110'>
            <span className='text-[#303de9] hover:text-white w-6 transition duration-300 hover:scale-110 '>Connect</span>
            Health
        </Link>

    </div>

    
  )
}

export default Header