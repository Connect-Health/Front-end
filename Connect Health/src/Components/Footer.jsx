import React from 'react'
import Elipse from '../../assets/Elipse.png'
import Logo from '../../assets/logo_preta.png'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className={`h-80 bg-${props.bg} flex flex-col`}>
        <img src={Elipse} alt="" className='absolute' />

        <div className='flex items-center flex-col pt-16'>
            <Link to='/' className={`w-1/12 hover:scale-90 hover:bg-${props.bgSec} ${props.invert} hover:${props.invert}-0 transition duration-200 rounded-full`}>
                <img src={Logo} alt="Nossa Logo redondo escrito connect Health e uma cabeça com uma planta nascendo"  />
            </Link>

            <div className='flex gap-10 mt-10'>
                <Link to="https://twitter.com">
                    <FaTwitter  className={`text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2 ${props.invert}`}/>
                </Link>
                    <Link to="https://instagram.com/cnnthealth">
                <FaInstagram  className={`text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2 ${props.invert}`}/>
                </Link>
                <Link to="https://facebook.com">
                    <FaFacebookF className={`text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2 ${props.invert}`} />
                </Link>
            </div>
        </div>

        <div className='flex items-center justify-between mx-10 mt-10'>
            <p className={`flex items-center ${props.invert}`}>
                <MdCopyright />
                2023 Connect Health
            </p>

            <div className='flex gap-4 text-sm'>
                <p className={`font-semibold cursor-pointer ${props.invert}`}>Ajuda</p>
                <p className={`font-semibold cursor-pointer ${props.invert}`}>Contato</p>
                <p className={`font-semibold cursor-pointer ${props.invert}`}>Politica de Privacidade</p>
                <p className={`font-semibold cursor-pointer ${props.invert}`}>Termos de Uso</p>
            </div>
        </div>
    </div>
  )
}

export default Footer