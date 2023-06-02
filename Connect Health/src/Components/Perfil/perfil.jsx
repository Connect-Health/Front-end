import React from 'react'
import logo from '../../../assets/logo_preta.png'
import { AiFillAppstore } from "react-icons/ai";
import { TiCalendar } from "react-icons/Ti";
import { BiNews, BiLogIn } from "react-icons/Bi";
import settings from '../../../assets/setting.png'





export default function perfil() {
    return (
        <div className='bg-[#55DF5A] w-full h-[100vh]'>
            <div></div>
            <img className='w-40 p-8' src={logo} />


            <div className='flex flex-col pl-8 justify-around w-[20%] h-[70%]'>

                <div className='flex gap-4'>
                    <AiFillAppstore className='text-3xl' />
                    <p className=''>Painel de controle</p>
                </div>
                <div className='flex gap-4'>
                    <TiCalendar className='text-3xl' />
                    <p className=''>Meu calendario</p>
                </div>
                <div className='flex gap-4'>
                    <BiNews className='text-3xl' />
                    <p className=''>Novidades</p>
                </div>
                <div className='flex gap-4'>
                    <img className='w-7' src={settings} />
                    <p className=''>Configurações</p>
                </div>
                <div className='flex gap-4'>
                    <BiLogIn className='text-3xl' />
                    <p className=''>Sair</p>
                </div>









            </div>

        </div>
    )
}
