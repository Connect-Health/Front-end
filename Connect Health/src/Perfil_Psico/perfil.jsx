import React from 'react'
import logo from '../../assets/logo_preta.png'
import ProfilePic from '../../assets/profilepic.png'
import { AiFillAppstore } from "react-icons/ai";
import settings from '../../assets/setting.png'
import Dashboard from './Components/Dashboard';
import { AiFillBell } from 'react-icons/ai'
import {AiOutlineMore} from 'react-icons/ai'
import {AiOutlineSound} from 'react-icons/ai'


function Perfil_Psi() {
    return (
        <div className='bg-[#B275FF] w-[100%] h-[100vh] flex gap-20'>


            <div className=' w-[16%]'>
                <img className='w-44 p-8 mb-[30px] invert' src={logo} />


                <div className='flex flex-col gap-[120px]'>
                    <div className='flex flex-col pl-8 gap-[55px] w-[100%] text-white'>

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

                    <div className='flex flex-col pl-8 gap-[50px] w-[100%] text-white '>
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
                <div className="bg-[#E7A9FD] w-[26%] h-[94vh] rounded-lg mt-[2%] shadow-2xl flex justify-center float-left -ml-44">
                    <div className='flex flex-col items-center gap-5 w-[80%]'>
                        <img className='object-cover rounded-full w-[180px] h-[180px] mt-10 border-4 border-[#B275FF]' src={ProfilePic} alt="" />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-center font-bold text-xl'>Willian Rizzo</h1>
                            <p className='text-center text-base'>Designer UI | UX </p>
                        </div>
                        <div className=' flex flex-col w-[100%] mt-2'>
                            <div className=' flex items-center justify-between'>
                                <h2 className='text-xl font-bold text-white'>Alarmes</h2>
                                <div className='bg-white p-2 rounded-full '>
                                    <AiFillBell className='text-3xl text-[#B275FF] ' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] mt-3 flex flex-col gap-6'>
                            <div className='bg-[#f5f5f5] rounded-md h-[10vh] flex items-center justify-between p-2 '>
                                <div className='bg-[#b375ff7e] rounded-lg p-2 ml-'>
                                    <AiOutlineSound className='text-[#8D53C7] text-3xl'/>
                                </div>
                                <div className='w-[100%] ml-8'>
                                    <p className='text-[12px] font-bold '>Próxima Consulta</p>
                                    <p className='text-[12px]'>8:00 - 12:00</p>
                                </div>
                                <div>
                                    <AiOutlineMore className='text-2xl'/>
                                </div>
                            </div>
                            <div className='bg-[#f5f5f5] rounded-md h-[10vh] flex items-center justify-between p-2 '>
                                <div className='bg-[#b375ff7e] rounded-lg p-2 ml-'>
                                    <AiOutlineSound className='text-[#8D53C7] text-3xl'/>
                                </div>
                                <div className='w-[100%] ml-8'>
                                    <p className='text-[12px] font-bold '>Próxima Consulta</p>
                                    <p className='text-[12px]'>8:00 - 12:00</p>
                                </div>
                                <div>
                                    <AiOutlineMore className='text-2xl'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Perfil_Psi;