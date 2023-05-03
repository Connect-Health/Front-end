import React from 'react'
import HomePsi from './Components/HomePsi'
import Detalhes from './Components/Detalhes'
import Filtros from './Components/Filtros'
import AllCards from '../Components/AllcardsPsi';
import Paginacao from './Components/Paginacao'
import Footer from './Components/Footer'

const Psicologia = () => {
  return (
    <div>
        <HomePsi />
        <Detalhes />
        <Filtros />
        <AllCards />
        <Paginacao />
        <Footer />
    </div>
  )
}

export default Psicologia