import React from 'react'
import Elipse from '../../../assets/Elipse.png'
import Logo from '../../../assets/logo_preta.png'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-80 bg-psi flex flex-col'>
        <img src={Elipse} alt="" className='absolute w-full' />

        <div className='flex items-center flex-col pt-16'>
            <Link to='/' className='w-1/12 invert hover:scale-90 hover:bg-[#9e20f1] hover:invert-0 transition duration-200 rounded-full'>
                <img src={Logo} alt="" />
            </Link>

            <div className='flex gap-10 mt-10'>
                <Link to="https://youtube.com">
                    <FaTwitter  className='text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2'/>
                </Link>
                    <Link to="https://instagram.com">
                <FaInstagram  className='text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2'/>
                </Link>
                <Link to="https://facebook.com">
                    <FaFacebookF className=' text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2' />
                </Link>
            </div>
        </div>

        <div className='flex items-center justify-between mx-10 mt-10'>
            <p className='flex items-center text-white'>
                <MdCopyright />
                2023 Connect Health
            </p>

            <div className='flex gap-4 text-sm'>
                <p className=' text-white'>Ajuda</p>
                <p className=' text-white'>Contato</p>
                <p className=' text-white'>Politica de Privacidade</p>
                <p className=' text-white'>Termos de Uso</p>
            </div>
        </div>
    </div>
  )
}

export default Footer