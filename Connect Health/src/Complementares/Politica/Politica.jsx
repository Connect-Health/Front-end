import React from 'react'
import Header from '../../Profissional/components/Header'
import Footer from '../../Components/Footer'
import Termos from './components/Termos'

const Politica = () => {
  return (
    <div>
        <Header 
            link=""
            text="azulsite"
        />

        <Termos />

        <Footer
            bg="[#5D59FF]"
            bgSec="[#457ff4]"
            invert="invert"
        />
    </div> 
  )
}

export default Politica