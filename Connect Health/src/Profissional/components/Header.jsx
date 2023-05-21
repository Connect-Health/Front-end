import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Header = (props) => {
  return (
    <div className='flex justify-center items-center py-3 px-10 z-50 bg-black/5 backdrop-blur-md'>
        <Link to={`/${props.link}`} className={`absolute left-5 text-2xl hover:scale-105 hover:text-${props.text} transition-all duration-100`}><FaArrowLeft /></Link>
        <Link to='/' className={`-ml-20   font-semibold text-white text-lg hover:text-${props.text} w-6 transition duration-300 hover:scale-110`}>
            <span className={`text-${props.text} hover:text-white w-6 transition duration-300 hover:scale-110`}>Connect</span>
            Health
        </Link>


        
    </div>

    
  )
}

export default Header