import React from 'react'
import Vetor from '../../assets/Vector.svg'

import HomeNutri from './Components/HomeNutri'
import Detalhes from '../Components/Detalhes'
import Filtros from '../Components/Filtros'
import AllCards from '../Components/AllCards';
import Footer from '../Components/Footer';
import { useEffect } from 'react'
import Menu from '../Components/Menu'
import Chatbot from '../Components/ChatBot/Chatbot'
import Typeformnutri from './Components/Typeformnutri'


function Nutricao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeNutri />
      <Menu
          area1="Inicio"
          area2="Area psicologia"
          area4="Eventos empresariais"
          area3="Feed de noticias"

          home=""
          link2="psicologia"
          link3="feed"
          link4="eventos"
      />
      <Detalhes 
        pai="bg-nutri shadow-nutrici"
        imagem ={Vetor}
      />

      <Filtros 
        color="nutri"
        secColor="[#00ff9d]"
        theme='#94E127'
        profissionais="Nutricionistas"
      />
      <AllCards />
      <Chatbot />
      <Footer
        bg="nutri"
        bgSec="[#95FF00]"
      />
      <Typeformnutri></Typeformnutri>
      
    </div>
  )
}

export default Nutricao