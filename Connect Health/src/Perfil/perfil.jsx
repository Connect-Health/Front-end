import React from 'react'
import logo from '../../assets/logo_preta.png'
import { AiFillAppstore } from "react-icons/ai";
import settings from '../../assets/setting.png'
import Dashboard from './Components/Dashboard';
import Description from './Components/Description';


function Perfil() {
    return (
        <div className='bg-[#38dd29] w-[100%] h-[100vh] flex gap-20'>


            <div className=' w-[15%]'>
                <img className='w-44 p-8 mb-[30px]' src={logo} />


                <div className='flex flex-col gap-[120px]'>
                    <div className='flex flex-col pl-8 gap-[55px] w-[100%] '>

                        <div className='flex gap-4'>
                            <AiFillAppstore className='text-3xl' />
                            <p className=''>Painel de controle</p>
                        </div>
                        <div className='flex gap-4'>

                            <p className=''>Meu calendario</p>
                        </div>
                        <div className='flex gap-4'>

                            <p className=''>Novidades</p>

                        </div>
                    </div>

                    <div className='flex flex-col pl-8 gap-[50px] w-[100%] '>
                        <div className='flex gap-4'>
                            <img className='w-7' src={settings} />
                            <p className=''>Configurações</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className=''>Sair</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex w-[100%]'>
                <Dashboard />
                <div className="bg-[#f5f5f5] w-[26%] h-[94vh] rounded-lg mt-[2%] shadow-2xl flex justify-center float-left -ml-44">
                    <div className='bg-white rounded-full w-40 h-40 mt-16'></div>
                </div>
            </div>

        </div>
    )
}
export default Perfil;
