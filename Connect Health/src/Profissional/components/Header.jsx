import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-center items-center py-3 px-10 z-50 bg-black/5 backdrop-blur-md'>
        <Link to='/nutricao' className='absolute left-5 text-2xl hover:scale-105 hover:text-nutri transition-all duration-100'><FaArrowLeft /></Link>
        <Link to='/' className='-ml-20   font-semibold text-white text-lg hover:text-nutri w-6 transition duration-300 hover:scale-110'>
            <span className='text-nutri hover:text-white w-6 transition duration-300 hover:scale-110'>Connect</span>
            Health
        </Link>


        
    </div>

    
  )
}

export default Header