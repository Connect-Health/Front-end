import React from 'react'

import HomeNutri from './Components/HomeNutri'
import Detalhes from './Components/Detalhes'
import Filtros from './Components/Filtros'
import Paginacao from './Components/Paginacao';
import Card from './Components/Card';
import AllCards from './Components/AllCards';
import Footer from './Components/Footer';

function Nutricao() {
  return (
    <div>
      <HomeNutri />
      <Detalhes />
      <Filtros />
      <AllCards />
      <Paginacao />
      <Footer />
    </div>
  )
}

export default Nutricao