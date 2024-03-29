import React from 'react'
import Header from '../../Components/Header'

import events from '../../../assets/eventos.jpg'
import Empresas from './Empresas'
import Menu from '../../Components/Menu'
import Chatbot from '../../Components/ChatBot/Chatbot'

const Eventos = () => {
  return (
    <div className='bg-[#f1f1dc]'>
        <Header
          health="hover:text-azulsite"
          connect="text-azulsite"
          area="Eventos para empresas"
          colorArea="hover:text-[#0f44ff]"
          link="/"
          areaNav="Inicio"
          pai="relative z-10"
          feed="text-white  "
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
        <img className='absolute top-0 z-0 w-full h-[25rem] object-cover max-md:h-[18rem]' src={events} alt="" />

        <div className='w-2/4 px-20 py-6 bg-white/90 backdrop-blur m-auto mt-[18rem] relative z-10 rounded max-md:w-full max-md:mt-[15rem] max-md:px-4'>
            <h2 className='text-xl text-center'>A união de nossos profissionais é sensacional para o Networking, participe de nossos eventos e seja recompensado por isso.</h2>
        </div>

        <h2 className='text-center text-lg font-semibold mt-10 mb-5'>Empresas que necessitam de serviços:</h2>

        <div className='grid grid-cols-3 gap-x-5 mx-5 max-md:grid-cols-1 max-md:mx-1'>
            <Empresas />
            <Empresas />
            <Empresas />
        </div>

        <Chatbot />
    </div>
  )
}

export default Eventos