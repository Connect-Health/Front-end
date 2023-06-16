import React, { useContext } from "react";
import Planta from '../../../assets/planta.svg'
import { IoIosArrowForward } from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Ft from '../../../assets/ft.svg'
import { AuthContext } from "../../AutoContext/AuthContext";


function Dashboard() {
    const { user } = useContext(AuthContext)
    
    return (
        <div className="bg-white h-[94%] w-[78%] rounded-lg mt-[2%] shadow-2xl">
            <div className="flex flex-col gap-2 ">
                <div className="pt-5 pl-12 flex flex-col gap-2">
                    <h2 className="text-2xl">Painel de Controle</h2>
                    <p className="">Bem vindo de volta, {user.nome}! Esperamos que seu dia seja incrível.</p>
                </div>

                {/*Inicio div dos cartoes*/}

                <div className="flex">
                    <div style={{backgroundImage:'url(../../../assets/peoplehug.png)'}} className=' bg-no-repeat  w-[15%] h-[150px] ml-12 mt-10 flex flex-col gap-2 rounded-lg items-center justify-center'>
                        <div className="">
                            <h1 className="text-2xl text-white">Home</h1>
                        </div>
                    </div>

                    {/* Inicio segundo card */}

                    <div style={{backgroundImage:'url(../../../assets/socialmedia.png)'}} className=' bg-no-repeat  w-[15%] h-[150px] ml-12 mt-10 flex flex-col gap-2 rounded-lg items-center justify-center'>
                        <div className="">
                            <h1 className="text-2xl text-white">Feed</h1>
                        </div>
                    </div>

                    <div style={{backgroundImage:'url(../../../assets/bgcomida.png)'}} className=' bg-cover w-[15%] h-[150px] ml-12 mt-10 flex flex-col gap-2 rounded-lg items-center justify-center'>
                        <div className="">
                            <h1 className="text-2xl text-white text-center">Nutrição</h1>
                        </div>
                    </div>

                    <div style={{backgroundImage:'url(../../../assets/enterprise.png)'}} className=' bg-cover  w-[15%] h-[150px] ml-12 mt-10 flex flex-col gap-2 rounded-lg items-center justify-center'>
                        <div className="">
                            <h1 className="text-2xl text-white">Eventos</h1>
                        </div>
                    </div>
                </div>

                {/* Fim segundo Card e da Div */}

                <div className="w-[65%] ml-12 mt-10 h-[40%] flex flex-col">
                    <div className=" flex justify-between items-center">
                        <p className="font-bold text-lg">Últimos pacientes atendidos</p>
                        <div className="flex">
                            <p>Veja todos</p>
                            <IoIosArrowForward className="text-2xl text-[#ddd018]" />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-6 mt-4">

                        {/*Primeiro User*/}

                        <div className="flex  items-center justify-between">
                            <img src={Ft} alt="" />
                            <div className="w-[30%]">
                                <p className="font-bold">Wendel Harrison</p>
                                <p className="text-sm">Bruno Scott</p>
                            </div>
                            <p>Feb 12</p>
                            <div className="flex items-center gap-2">
                                <AiFillStar className="text-[#ddd018]"/>
                                <p>4.6</p>
                            </div>
                            <button>Perfil</button>
                            <BsFillBookmarkFill/>
                        </div>

                        {/*Segundo */}
                        <div className="flex  items-center justify-between">
                            <img src={Ft} alt="" />
                            <div className="w-[30%]">
                                <p className="font-bold">Willian Rizzo</p>
                                <p className="text-sm">Bruno Scott</p>
                            </div>
                            <p>Feb 12</p>
                            <div className="flex items-center gap-2">
                                <AiFillStar className="text-[#ddd018]"/>
                                <p>4.6</p>
                            </div>
                            <button>Perfil</button>
                            <BsFillBookmarkFill/>
                        </div>

                        <div className="flex  items-center justify-between">
                            <img src={Ft} alt="" />
                            <div className="w-[30%]">
                                <p className="font-bold">Gabi Nunes</p>
                                <p className="text-sm">Bruno Scott</p>
                            </div>
                            <p>Feb 12</p>
                            <div className="flex items-center gap-2">
                                <AiFillStar className="text-[#ddd018]"/>
                                <p>4.6</p>
                            </div>
                            <button>Perfil</button>
                            <BsFillBookmarkFill/>
                        </div>

                        <div className="flex  items-center justify-between">
                            <img src={Ft} alt="" />
                            <div className="w-[30%]">
                                <p className="font-bold">Rafael Ferreira</p>
                                <p className="text-sm">Bruno Scott</p>
                            </div>
                            <p>Feb 12</p>
                            <div className="flex items-center gap-2">
                                <AiFillStar className="text-[#ddd018]"/>
                                <p>4.6</p>
                            </div>
                            <button>Perfil</button>
                            <BsFillBookmarkFill/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Dashboard;