import React from "react";
import Planta from '../../../assets/planta.svg'
import { IoIosArrowForward } from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Ft from '../../../assets/ft.svg'


function Dashboard() {
    return (
        <div className="bg-white h-[94vh] w-[78%] rounded-lg mt-[2%] shadow-2xl">
            <div className="flex flex-col gap-2">
                <div className="pt-5 pl-12 flex flex-col gap-2">
                    <h2 className="text-2xl">Painel de Controle</h2>
                    <p className="">Bem vindo de volta, Willian! Esperamos que seu dia seja incrível.</p>
                </div>

                {/*Inicio div dos cartoes*/}

                <div className="flex">
                    <div className='bg-[#e3ea12] w-[23%] h-[27vh] pt-8 ml-12 flex flex-col gap-2  rounded-lg items-center'>
                        <img className="h-40 -mt-10 -mb-8" src={Planta} alt="" />
                        <div className="z-1">
                            <h3 className="font-bold text-xl">9.6 AVERAGE SCORE</h3>
                            <p className="text-sm">Better than 86% of students</p>
                        </div>
                    </div>
                    
                    {/* Inicio segundo card */}

                    <div className='bg-[#e9e9e9aa] w-[23%] h-[27vh] pt-8 ml-12 flex flex-col gap-2  rounded-lg items-center'>
                        <div className=" flex items-center">
                            <div>
                                <h1 className="text-xl w-[20%]">Product Analytics</h1>
                                <p>Middle/Pro</p>
                            </div>
                            <div className=" border-2 w-[15%] h-7 text-center pl-1 rounded-md ">
                                <IoIosArrowForward className="text-2xl " />
                            </div>
                        </div>
                        <div className="z-1 w-[90%] mt-6">
                            <div className="flex justify-between">
                                <p>In Progress</p>
                                <p>34%</p>
                            </div>
                            
                            <div class="w-full bg-[#ffffff] rounded-full h-2.5 ">
                                <div class="w-[60%] bg-[#ddd018] h-2.5 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fim segundo Card e da Div */}

                <div className="w-[50%] ml-12 mt-10 h-[40vh] flex flex-col">
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