import React from 'react'
import Vetor from '../../assets/VectorPsi.svg'


import HomePsi from './Components/HomePsi'
import Detalhes from '../Components/Detalhes'
import Filtros from '../Components/Filtros'
import AllCards from '../Components/AllcardsPsi';
import Footer from '../Components/Footer'

import { useEffect } from 'react'
import Menu from '../Components/Menu'

const Psicologia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=''>
        <HomePsi />
        <Menu
          area1="Inicio"
          area2="Area nutrição"
          area4="Eventos empresariais"
          area3="Feed de noticias"

          home=""
          link2="nutricao"
          link3="feed"
          link4="eventos"
        />
        <Detalhes
          pai="bg-psi shadow-psico"
          imagem ={Vetor}
        />
        <Filtros 
          color="psi"
          secColor="[#7912ce]"
          theme='#7912ce'
          profissionais="Psicólogos"
        />
        <AllCards />
        <Footer 
           bg="psi"
           bgSec="[#9e20f1]"
           invert="invert"
        />
    </div>
  )
}

export default Psicologia