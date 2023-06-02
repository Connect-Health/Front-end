import React from 'react'
import logo from '../../assets/logo_preta.png'
import { AiFillAppstore } from "react-icons/ai";
import { TiCalendar } from "react-icons/Ti";
import { BiNews, BiLogIn } from "react-icons/Bi";
import settings from '../../assets/setting.png'


function Perfil() {
    return (
        <div className='bg-[#38dd29] w-full h-[100vh]'>
            <img className='w-44 p-8 mb-[30px]' src={logo} />


            <div className='flex flex-col gap-[134px]'>
                <div className='flex flex-col pl-8 gap-[55px] w-[20%] '>

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
                </div>

                <div className='flex flex-col pl-8 gap-[100px] w-[20%] '>
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

        </div>
    )
}
export default Perfil;
