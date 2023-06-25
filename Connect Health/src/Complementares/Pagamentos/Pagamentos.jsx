import React from 'react'
import Header from '../../Components/Header'

import Menu from '../../Components/Menu'

import Ajuda from '../../../assets/ajuda.jpg'
import seguro from '../../../assets/seguro.png'

function Pagamentos () {
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
        <div className='flex'>
            <div className="bg-azulsite w-80 mt-[5rem] ml-24 rounded-lg h-[300px]">
                <h1  className='text-white text-[25px] text-center p-5'>Plano Vitalidade</h1>
                <p className='text-white p-2 text-center'>
                    -2 consultas de psicologia <br/>
                    - 1 consulta de nutrição<br/>
                    - Acesso ao feed de noticias<br/>
                    - Gerenciamento de consultas
                </p>
                <button className='text-[17px] text-white ml-[110px] bg-'>SELECIONE</button>
            </div>

            
            <div className="bg-azulsite w-80 mt-[5rem] ml-24 rounded-lg h-[300px]">
                JAIR
            </div>

            <div className="bg-azulsite w-80 mt-[5rem] ml-24 rounded-lg h-[300px]">
                JAIR
            </div>
        </div>
        
            <img className='m-auto w-14 mt-[24rem]' src={seguro} />


        </div>
    )
}

export default Pagamentos