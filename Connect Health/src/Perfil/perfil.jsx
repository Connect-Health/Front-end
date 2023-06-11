import React from 'react'
import logo from '../../assets/logo_preta.png'
import ProfilePic from '../../assets/profilepic.png'
import { AiFillAppstore } from "react-icons/ai";
import settings from '../../assets/setting.png'
import Dashboard from './Components/Dashboard';
import {AiFillBell} from 'react-icons/ai'



function Perfil() {
    return (
        <div className='bg-[#38dd29] w-[100%] h-[100vh] flex gap-20'>


            <div className=' w-[15%]'>
                <img className='w-44 p-8 mb-[30px]' src={logo} />


                <div className='flex flex-col gap-[120px]'>
                    <div className='flex flex-col pl-8 gap-[55px] w-[100%] '>

                        <div className='flex gap-4'>
                            
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
                <div className="bg-[#9DFF95] w-[26%] h-[94vh] rounded-lg mt-[2%] shadow-2xl flex justify-center float-left -ml-44">
                    <div className='flex flex-col items-center gap-5 w-[80%]'>
                        <img className='object-cover rounded-full w-[200px] h-[200px] mt-10 border-4 border-[#38dd29]' src={ProfilePic} alt="" />
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-center font-bold text-xl'>Willian Rizzo</h1>
                            <p  className='text-center text-lg'>Designer UI | UX </p>
                        </div>
                        <div className=' flex flex-col w-[100%] mt-6'>
                            <div className=' flex items-center justify-between'>
                                <h2 className='text-xl font-bold'>Alarmes</h2>
                                <div className='bg-white p-2 rounded-full '>
                                    <AiFillBell className='text-3xl text-[#ddd018] '/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Perfil;
