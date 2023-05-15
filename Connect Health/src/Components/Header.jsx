import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../assets/bars-solid.svg'

const Header = (props) => {
  return (
    <div className={`
      flex justify-between items-center py-3 px-10 z-50 bg-white/0 backdrop-blur-3xl ${props.pai}
      max-md:w-full max-md:justify-normal
    `}>
        <img src={Menu} alt='icone menu' className='w-5 hidden max-md:block' />

        <Link to='/' className={`
          font-semibold text-white text-lg w-6 transition duration-300 hover:scale-110 ${props.health}
          max-md:text-base max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] w-fit
        `}>
            <span className={`hover:text-white w-6 transition duration-300 hover:scale-110 ${props.connect} `}>Connect</span>
            Health
        </Link>

        <h2 className={`
          text-white font-bold uppercase text-base ml-80 hover:scale-110 transition duration-300 ${props.colorArea}
          max-md:hidden
        `}>{props.area}</h2>

        <div className='flex gap-5 z-10 max-md:hidden'>
            <Link to={props.link} className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>{props.areaNav}</Link>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Feed de Noticias</h2>
            <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>
        </div>
    </div>

    
  )
}

export default Header