import React from 'react'
import Vetor from '../../assets/VectorPsi.svg'


import HomePsi from './Components/HomePsi'
import Detalhes from '../Components/Detalhes'
import Filtros from '../Components/Filtros'
import AllCards from '../Components/AllcardsPsi';
import Paginacao from './Components/Paginacao'
import Footer from './Components/Footer'

import { useEffect } from 'react'

const Psicologia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <HomePsi />
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
        <Paginacao />
        <Footer />
    </div>
  )
}

export default Psicologia