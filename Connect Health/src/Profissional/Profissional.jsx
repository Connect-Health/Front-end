import React from 'react'
import Header from './components/Header'
import Perfil from './components/Perfil'
import Icone1 from '../../assets/nutricon1.jpg'
import Icone2 from '../../assets/nutricon2.jpg'
import Icone3 from '../../assets/nutricon3.jpg'
import Icone4 from '../../assets/nutricon4.jpg'
import Icone5 from '../../assets/nutricon5.jpg'
import Fru from '../../assets/tracos.svg'
import Button from './components/minComponents/Button'

const Profissional = () => {
  return (
    <div className='overflow-hidden '>
        <Header />
        <img className='absolute -z-10 left-0 top-60' src={Icone1} alt="" />
        <img className='absolute -z-10 right-0 top-60' src={Icone2} alt="" />
        <img className='absolute -z-10 left-0 top-[120vh]' src={Icone3} alt="" />
        <img className='absolute -z-10 right-0 top-[120vh]' src={Icone4} alt="" />
        <img className='absolute -z-10 left-1/2 top-[80vh] -translate-x-1/2' src={Icone5} alt="" />
        <Perfil />
        <Button />
    </div>
  )
}

export default Profissional