import React from 'react'
import Header from '../../Components/Header'

import Menu from '../../Components/Menu'

import Ajuda from '../../../assets/ajuda.jpg'
import seguro from '../../../assets/seguro.png'

function Pagamentos() {
    return (
        <div className='bg-[#f1f1dc]'>
            <Header
                health="hover:text-azulsite"
                connect="text-azulsite"
                area="Pagamento"
                colorArea="hover:text-[#0f44ff]"
                link="/"
                areaNav="Inicio"
                colorAreaNav="Inicio hover:text-[#0f44ff]"
                pai="relative z-10"
            />
            <Menu
                area1="Inicio"
                area2="Area psicologia"
                area3="Area nutrição"
                area4="Feed de noticias"

                home=""
                link2="psicologia"
                link3="nutricao"
                link4="feed"
            />

            <img className='absolute top-0 z-0 w-full h-[25rem] object-cover max-md:h-[18rem]' src={Ajuda} />

            <h1 className='text-azulsite mt-[24rem] text-center text-[40px]'>Planos disponíveis</h1>
            <div className='flex justify-center '>
                <div className="bg-white w-80 mt-[5rem] ml-16 rounded-lg h-[300px]">
                    <br></br> <h1 className='text-black text-[25px] text-center p-5'>Plano Vitalidade</h1>
                    <p className='text-black p-2 text-center'>
                        -2 consultas de psicologia <br />
                        - 1 consulta de nutrição<br />
                        - Consultas de 30 minutos<br />
                        - Gerenciamento de consultas
                    </p>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1NMx6pECStP5J8BJnaXENPCL"
                        publishable-key="pk_live_51NLysPECStP5J8BJaNMb21HpesCUF1SRf9Wn6MJjWk3aQN25QR8fCo3JgOOaq9ZTAD7dJEykJbnl8zzENRME40dg00ixAhqnTE"
                    >
                    </stripe-buy-button>
                </div>


                <div className="bg-white w-80 mt-[5rem] ml-16 rounded-lg h-[300px]">
                    <h1 className='text-black text-[25px] text-center p-5'>Plano mensal Equilíbrio</h1>
                    <p className='text-black p-2 text-center'>
                        -4 consultas de psicologia <br />
                        - 2 consulta de nutrição<br />
                        - Consultas de 45 minutos<br />
                        - Gerenciamento de consultas
                    </p>
                    <button className='text-[17px] bg-[#f1f1dc] text-black rounded-lg h-12 ml-[110px] hover:bg-[#d4d1d1] '>SELECIONE</button>
                </div>

                <div className="bg-white w-80 mt-[5rem] ml-16 rounded-lg h-[300px]">
                    <h1 className='text-black text-[25px] text-center p-5'>Plano mensal Excelência</h1>
                    <p className='text-black p-2 text-center'>
                        -5 consultas de psicologia <br />
                        - 2 consulta de nutrição<br />
                        - Consultas de 60 minutos<br />
                        - Gerenciamento de consultas
                    </p>
                    <button className='text-[17px] bg-[#f1f1dc] text-black rounded-lg h-12 ml-[110px] hover:bg-[#d4d1d1]'>SELECIONE</button>
                </div>
            </div>

            <img className='m-auto w-14 mt-[10rem]' src={seguro} />
            <h1 className='text-azulsite mt-[20px] text-center text-[30px]'>Agora escolha como você quer realizar o pagamento!</h1>



        </div>
    )
}

export default Pagamentos