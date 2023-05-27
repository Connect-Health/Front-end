import fundo_1 from '../../../assets/fundo_1.png'
import cabeca_1 from '../../../assets/cabeça_1.png'
import mulher_1 from '../../../assets/mulher_1.png'
import Logo from '../../../assets/logo_preta.png'
import estrela from '../../../assets/estrelas2.jpg'
import Blocos from './Blocos'
import Header from './Header'
import Psico from './Psico'

import Psi from '../../../assets/psiSlide.jpg'


import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { useState, useEffect } from 'react'
import Nutrim from './Nutrim'
import Carrossel from './Carrossel'

const slides= [
    { image: '../../../assets/psiSlide.jpg', text: "Aqui, sua saúde mental é respeitada. Nos conte o que está sentindo hoje e amanhã viva como nunca!", title: "Psicologia" },
    { image: "../../../assets/nutriSlide.jpg", text: "A alimentação é a parte mais importante do nosso dia. Mantenha sua alimentação saúdavel aqui!", title: "Nutrição" },
    { image: "../../../assets/feedSlide.jpg", text: "Esteja por dentro de todas as novidades. Notícias, dicas, receitas, entre outras! tudo no nosso Feed!", title: "Feed de Noticias" },
  ]

function BGHome(){
    const [offset, setOffset] = useState(0)

    useEffect( () => {
        function handleScroll(){
            setOffset(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <div className='max-md:h-52 '>
            
            <div className={`relative `} style={{ height: window.innerHeight}}>
                <img src={estrela} className='hidden absolute dark:block ' alt="" />
                <img className={`w-full absolute max-md:pt-10`} style={{ transform: `translateY(${offset * 0.35}px)`}} src={fundo_1} alt="" />
                <img className='w-full absolute max-md:pt-10' style={{ transform: `translateY(${offset * 0.3}px)`}} src={cabeca_1} alt="" />
                <img className='w-full absolute max-md:pt-10' style={{ transform: `translateY(${offset * 0.1}px)`}} src={mulher_1} alt="" />
            </div>

            <div className='flex justify-between flex-row'>
                <div className='w-[20%] h-auto p-5 bg-[#d3d3d3] backdrop-blur-xl rounded-2xl bg-opacity-50 absolute top-[44%] left-[2.7%] z-10
                max-md:h-58 max-md:w-96 max-md:p-4 max-md:top-[44%]'
                style={{ transform: `translateX(${-offset * .5}px)`}}>
                    <h3 className='text-center font-bold
                    max-md:text-[16px]
                    '>Mantenha-se conectado à sua saúde!</h3>
                    <p className='text-sm text-center pt-3
                    max-md:text-[12px]
                    '>A saúde é um bem precioso que merece ser valorizado e cuidado com atenção. Aqui acreditamos que a saúde é a base para alcançar nossos objetivos e desfrutar de uma vida plena.</p>
                    <img className='w-[30%] pt-5  m-auto' src={Logo} alt="" />
                </div>
                <div className="w-1/5 absolute right-10 bottom-16 max-md:hidden ">
                    <Carrossel slides={slides} />
                </div>

            </div>

        </div>
    )
}

export default BGHome