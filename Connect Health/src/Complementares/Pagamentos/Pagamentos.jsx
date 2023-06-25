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

        <div>
                <h1 className='text-azulsite mt-[24rem] text-center text-[40px]'>Planos disponíveis</h1>
            <div className="bg-azulsite w-60 mt-[24rem]">
            </div>
            <img className='m-auto w-14 mt-[24rem]' src={seguro} />
        </div>


        </div>
    )
}

export default Pagamentos