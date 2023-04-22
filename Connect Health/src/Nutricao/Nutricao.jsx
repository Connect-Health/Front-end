import React from 'react'

import HomeNutri from './Components/HomeNutri'
import Detalhes from './Components/Detalhes'
import Filtros from './Components/Filtros'
import Paginacao from './Components/paginacao'

const Nutricao = () => {
  return (
    <div>
      <HomeNutri />
      <Detalhes />
      <Filtros />
      <Paginacao />

      
    </div>
  )
}

export default Nutricao