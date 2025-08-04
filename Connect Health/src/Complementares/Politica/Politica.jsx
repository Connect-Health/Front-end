import React, { useEffect } from 'react'
import Header from '../../Profissional/components/Header'
import Footer from '../../Components/Footer'
import Termos from './components/Termos'

const Politica = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Header 
            link=""
            text="azulsite"
        />

        <Termos />

        <Footer
            bg="[#8c8ae5]"
            bgSec="[#457ff4]"
            invert="invert"
            invertHome="invert-0"
        />
    </div> 
  )
}

export default Politica