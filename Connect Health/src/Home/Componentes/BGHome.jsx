import fundo_1 from '../../../assets/fundo_1.png'
import cabeca_1 from '../../../assets/cabeça_1.png'
import mulher_1 from '../../../assets/mulher_1.png'
import Logo from '../../../assets/logo_preta.png'
import Blocos from './Blocos'
import Header from './Header'
import Psico from './Psico'

import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import { useState, useEffect } from 'react'
import Nutrim from './Nutrim'

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
        <div className='max-md:h-52'>
            <div className={`relative`} style={{ height: window.innerHeight}}>
                <img className={`w-full absolute`} style={{ transform: `translateY(${offset * 0.35}px)`}} src={fundo_1} alt="" />
                <img className='w-full absolute' style={{ transform: `translateY(${offset * 0.3}px)`}} src={cabeca_1} alt="" />
                <img className='w-full absolute' style={{ transform: `translateY(${offset * 0.1}px)`}} src={mulher_1} alt="" />
            </div>

            <div className='w-[20%] h-auto p-5 bg-[#d3d3d3] backdrop-blur-xl rounded-2xl bg-opacity-50 absolute top-[35%] left-[2.7%] z-10
            max-md:h-58 max-md:w-52 max-md:p-4'
             style={{ transform: `translateX(${-offset * .5}px)`}}>
                <h3 className='text-center font-bold
                max-md:text-[12px]
                '>Mantenha-se conectado à sua saúde!</h3>
                <p className='text-sm text-center pt-3
                max-md:text-[9px]
                '>A saúde é um bem precioso que merece ser valorizado e cuidado com atenção. Aqui acreditamos que a saúde é a base para alcançar nossos objetivos e desfrutar de uma vida plena.</p>
                <img className='w-[30%] pt-5  m-auto' src={Logo} alt="" />
            </div>
        </div>
    )
}

export default BGHome