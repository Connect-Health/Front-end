import React from 'react'

import HomeNutri from './Components/HomeNutri'
import Detalhes from './Components/Detalhes'
import Filtros from './Components/Filtros'
import Paginacao from './Components/paginacao';
import Card from './Components/Card';
import AllCards from './Components/AllCards';

function Nutricao() {
  return (
    <div>
      <HomeNutri />
      <Detalhes />
      <Filtros />
      <AllCards />
      <Paginacao />


    </div>
  )
}

export default Nutricao