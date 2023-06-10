import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Menu2 from '../../assets/bars-solid.svg'
import Menu from './Menu'
import Perfil from './Perfil'
import { AuthContext } from '../AutoContext/AuthContext'

const Header = (props) => {
  const { user } = useContext(AuthContext)

  return (
    <div className={`
      flex justify-between items-center py-3 px-10 z-50 bg-white/0 backdrop-blur-3xl ${props.pai}
      max-md:w-full max-md:justify-normal max-md:px-2 max-md:py-5
    `}>
        <Link to='/' className={`
          font-semibold text-white text-lg w-6 transition duration-300 hover:scale-110 ${props.health}
          max-md:text-base max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] w-fit
        `}>
            <span className={`hover:text-white w-6 transition duration-300 hover:scale-110 ${props.connect} `}>Connect</span>
            Health
        </Link>

        <h2 className={`
          text-white font-bold uppercase text-base hover:scale-110 transition duration-300 absolute left-1/2 -translate-x-1/2 ${props.colorArea}
          max-md:hidden
        `}>{props.area}</h2>

        <div className='flex gap-5 z-10 max-md:hidden items-center'>
            <Link to={props.link} className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>{props.areaNav}</Link>
            <Link to='/feed' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Feed de Noticias</Link>
            {user ? (
              <div className='max-md:hidden'>
                <Perfil />
              </div>
              ) : (
                <Link to="/login" className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</Link>
              )
            }
        </div>
    </div>

    
  )
}

export default Header