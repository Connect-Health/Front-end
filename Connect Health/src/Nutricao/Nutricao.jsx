import React from 'react'
import Vetor from '../../assets/Vector.svg'

import HomeNutri from './Components/HomeNutri'
import Detalhes from '../Components/Detalhes'
import Filtros from './Components/Filtros'
import Paginacao from './Components/Paginacao';
import AllCards from '../Components/AllCards';
import Footer from './Components/Footer';

function Nutricao() {
  return (
    <div>
      <HomeNutri />
      <Detalhes 
        pai="bg-nutri shadow-nutrici"
        imagem ={Vetor}
      />
      <Filtros />
      <AllCards />
      <Paginacao />
      <Footer />
    </div>
  )
}

export default Nutricao