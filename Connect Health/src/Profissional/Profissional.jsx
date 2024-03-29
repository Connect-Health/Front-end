import React from 'react'
import Header from './components/Header'
import Perfil from './components/Perfil'
import Icone1 from '../../assets/nutricon1.jpg'
import Icone2 from '../../assets/nutricon2.jpg'
import Icone3 from '../../assets/nutricon3.jpg'
import Icone4 from '../../assets/nutricon4.jpg'
import Icone5 from '../../assets/nutricon5.jpg'
import Button from './components/minComponents/Button'
import { useEffect } from 'react';
import Fundo from '../../assets/fundo.png'

const Profissional = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-[#4fec6f]/30'>
        <Header
          link="nutricao"
          text="nutri"
        />
        <img className=' absolute -z-10 left-0 top-60' src={Icone1} alt="" />
        <img className=' absolute -z-10 right-0 top-60' src={Icone2} alt="" />
        <img className=' absolute -z-10 left-0 top-[120vh]' src={Icone3} alt="" />
        <img className=' absolute -z-10 right-0 top-[120vh]' src={Icone4} alt="" />
        <img className=' absolute -z-10 left-1/2 top-[80vh] -translate-x-1/2' src={Icone5} alt="" />
        <Perfil
          areaUrl="nutricionistas"
          fundo={Fundo}
        />
        <Button 
          fundo="nutri"
        />
    </div>
  )
}

export default Profissional