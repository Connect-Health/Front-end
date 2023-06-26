import React, { useContext } from 'react'
import logo from '../../assets/logo_preta.png'
import ProfilePic from '../../assets/profilepic.png'
import { AiFillAppstore } from "react-icons/ai";
import settings from '../../assets/setting.png'
import Dashboard from './Components/Dashboard';
import { AiFillBell } from 'react-icons/ai'
import {AiOutlineMore} from 'react-icons/ai'
import {AiOutlineSound} from 'react-icons/ai'
import { AuthContext } from '../AutoContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Perfil() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate('/login')
    }
    return (
        <div className='bg-[#38dd29] w-[100%] h-[100vh] flex gap-20'>


            <div className=' w-[15%]'>
                <Link to='/'><img className='w-44 p-8 mb-[30px]' src={logo} /></Link>


                <div className='flex flex-col gap-[120px]'>
                    <div className='flex flex-col pl-8 gap-[55px] w-[100%] '>

                        <div className='flex gap-4'>

                            <p className='cursor-pointer'>Painel de controle</p>
                        </div>
                        <div className='flex gap-4'>

                            <p className='cursor-pointer'>Meu calendario</p>
                        </div>
                        <div className='flex gap-4'>

                            <p className='cursor-pointer'>Novidades</p>

                        </div>
                    </div>

                    <div className='flex flex-col pl-8 gap-[50px] w-[100%] '>
                        <div className='flex gap-4'>

                            <p className='cursor-pointer'>Configurações</p>
                        </div>
                        <div className='flex gap-4'>
                            <p onClick={handleLogout} className='cursor-pointer'>Sair</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex w-[100%]'>
                <Dashboard />
                <div className="bg-[#9DFF95] w-[26%] h-[94%] rounded-lg mt-[2%] shadow-2xl flex justify-center float-left -ml-44">
                    <div className='flex flex-col items-center gap-5 w-[80%]'>
                        <img className='object-cover rounded-full w-[180px] h-[180px] mt-10 border-4 border-[#38dd29]' src={user.urlAvatar} alt="" />
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-center font-bold text-xl'>{user.nome} {user.sobrenome}</h1>
                            <p className='text-center text-base'>{user.areaAtuacao.nome} </p>
                        </div>
                        <div className=' flex flex-col w-[100%] mt-2'>
                            <div className=' flex items-center justify-between'>
                                <h2 className='text-xl font-bold'>Alarmes</h2>
                                <div className='bg-white p-2 rounded-full '>
                                    <AiFillBell className='text-3xl text-[#ddd018] ' />
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] mt-3 flex flex-col gap-6'>
                            <div className='bg-[#f5f5f5] rounded-md h-[10vh] flex items-center justify-between p-2 '>
                                <div className='bg-[#ffd043a0] rounded-lg p-2 ml-'>
                                    <AiOutlineSound className='text-[#FF993A] text-3xl'/>
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
                                <div className='bg-[#ffd043a0] rounded-lg p-2 ml-'>
                                    <AiOutlineSound className='text-[#FF993A] text-3xl'/>
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
export default Perfil;
