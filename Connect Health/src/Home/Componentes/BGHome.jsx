import fundo_1 from '../../../assets/fundo_1.png'
import cabeca_1 from '../../../assets/cabeça_1.png'
import mulher_1 from '../../../assets/mulher_1.png'
import Logo from '../../../assets/logo_preta.png'
import estrela from '../../../assets/estrelas2.jpg'
import Blocos from './Blocos'
import Header from './Header'
import Psico from './Psico'
import fundo_claro from '../../../assets/fundo_home3.png'
import fundo_escuro from '../../../assets/fundo_home2.png'

import Psi from '../../../assets/psiSlide.jpg'


import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { useState, useEffect, useContext } from 'react'
import Carrossel from './Carrossel'
import psiSlide from '../../../assets/psiSlide.jpg'
import nutriSlide from '../../../assets/nutriSlide.jpg'
import feedSlide from '../../../assets/feedSlide.jpg'
import { ThemeContext } from '../../AutoContext/ThemeContext'


function BGHome(){
    const slides= [
        { image: psiSlide, text: "Aqui, sua saúde mental é respeitada. Nos conte o que está sentindo hoje e amanhã viva como nunca!", title: "Psicologia" },
        { image: nutriSlide, text: "A alimentação é a parte mais importante do nosso dia. Mantenha sua alimentação saúdavel aqui!", title: "Nutrição" },
        { image: feedSlide, text: "Esteja por dentro de todas as novidades. Notícias, dicas, receitas, entre outras! tudo no nosso Feed!", title: "Feed de Noticias" },
      ]
    const [offset, setOffset] = useState(0)
    const [headerBg, setHeaderBg] = useState(false);

    useEffect( () => {
        function handleScroll(){
            setOffset(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const { theme } = useContext(ThemeContext);
    useEffect(() => {
              if (theme === "dark"){
                  document.documentElement.classList.add("dark");
                  
              } else {
                  document.documentElement.classList.remove("dark");
              }
          }, [theme]);

    const fundoSelecionado = theme === 'dark' ? fundo_escuro : fundo_claro ;

    return(
        <div className='max-md:h-0 '>
            <img className='w-full h-[100vh] relative' src={fundoSelecionado} alt="" />        
            <Header />

            <div className='flex justify-between flex-row'>
                <div className='w-[20%] h-auto p-5 bg-[#d3d3d3] backdrop-blur-xl rounded-2xl bg-opacity-50 absolute top-[44%] left-[2.7%] z-10
                max-md:h-58 max-md:w-96 max-md:p-4 max-md:top-[44%] max-md:hidden'
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