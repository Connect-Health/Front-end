import React from "react";
import Planta from '../../../assets/planta.svg'
import { IoIosArrowForward } from 'react-icons/io'

function Dashboard() {
    return (
        <div className="bg-white h-[92vh] w-[78%] rounded-lg mt-[2%]">
            <div className="flex flex-col gap-6">
                <div className="pt-8 pl-12 flex flex-col gap-4">
                    <h2 className="text-3xl">Painel de Controle</h2>
                    <p>Bem vindo de volta, Willian! Esperamos que seu dia seja incrível.</p>
                </div>

                {/*Inicio div dos cartoes*/}

                <div className="flex">
                    <div className='bg-[#e3ea12] w-[23%] h-[27vh] pt-8 ml-12 flex flex-col gap-2  rounded-lg items-center'>
                        <img className="h-40 -mt-10 -mb-8" src={Planta} alt="" />
                        <div className="z-1">
                            <h3 className="font-bold text-xl">9.6 AVERAGE SCORE</h3>
                            <p>Better than 86% of students</p>
                        </div>
                    </div>
                    
                    {/* Inicio segundo card */}

                    <div className='bg-[#e9e9e9aa] w-[23%] h-[27vh] pt-8 ml-12 flex flex-col gap-2  rounded-lg items-center'>
                        <div className=" flex items-center">
                            <div>
                                <h1 className="text-2xl">Product Analytics</h1>
                                <p>Middle/Pro</p>
                            </div>
                            <div className=" border-2 w-[15%] h-7 text-center pl-1 rounded-md ">
                                <IoIosArrowForward className="text-2xl " />
                            </div>
                        </div>
                        <div className="z-1 w-[90%] mt-5">
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

                <div className="w-[50%] ml-12 h-[40vh] flex flex-col">
                    <div className=" flex justify-between items-center">
                        <p className="font-bold text-lg">Últimos pacientes atendidos</p>
                        <div className="flex">
                            <p>Veja todos</p>
                            <IoIosArrowForward className="text-2xl text-[#ddd018]" />
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Dashboard;