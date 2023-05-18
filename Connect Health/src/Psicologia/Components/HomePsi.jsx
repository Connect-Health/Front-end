import React from 'react'
import Header from '../../Components/Header'
import { MdSubdirectoryArrowRight } from "react-icons/md"
import BackGround from '../../../assets/psi.png'

import { useEffect, useState } from 'react';
import AnimatedPsi from '../../Components/Letters/AnimatedPsi'


const HomePsi = () => {
    const [letterClass, setLetterClass] = useState('texts-animate');
    useEffect(() => {
        setTimeout(() => {
        return  setLetterClass('texts-animate-hover')
        }, 3000)
    }, [])

  return (
    <div className='h-[650px] flex flex-col'>
      <img src={BackGround} className='absolute -z-10 h-[650px] w-[65%] flex self-end max-md:w-full max-md:h-52 max-md:mt-10' alt="" />

        <Header
            health="hover:text-psi"
            connect="text-psi"
            area="Psicologia"
            colorArea="hover:text-psi"
            link="/nutricao"
            areaNav="nutrição"
        />

        <div className='h-[655px] w-[35%] mt-[-55px] bg-[#9916FF]/30'>
            <div className=' h-full bg-[#C2E6DF]/70 flex justify-center items-center flex-col max-md:h-52 max-md:mt-10'>

            <h2 className='w-[90%] font-bold text-3xl text-center mt-10'>
            <AnimatedPsi
                letterClass={letterClass}
                strArray={[
                'S', 
                'e', 
                'u', 
                ' ', 
                'b', 
                'e', 
                'm', 
                '-', 
                'e', 
                's', 
                't', 
                'a', 
                'r', 
                ]}
                idx={13} 
            /> 
            
            <br />

            <AnimatedPsi
                letterClass={letterClass}
                strArray={[
                'E',
                'm',
                'o',
                'c',
                'i',
                'o',
                'n',
                'a',
                'l',
                ' ',
                'é',
                ' ',
                'i',
                'm',
                'p',
                'o',
                'r',
                't',
                'a',
                'n',
                't',
                'e',
                '.',
                ]}
                idx={23}
            /> <br />

            <AnimatedPsi
                letterClass={letterClass}
                strArray={[
                'd',
                'e',
                'i',
                'x',
                'e',
                ' ',
                'a',
                ' ',
                'p',
                's',
                'i',
                'c',
                'o',
                'l',
                'o',
                'g',
                'i',
                'a',
                ]}
                idx={18}
            /> <br />

            <AnimatedPsi
                letterClass={letterClass}
                strArray={[
                'a',
                'j',
                'u',
                'd',
                'a',
                'r',
                ' ',
                'a',
                ' ',
                'a',
                'l',
                'c',
                'a',
                'n',
                'ç',
                'á',
                '-',
                'l',
                'o',
                '!',
                ]}
                idx={18}
            />

            
            </h2>

            <p className='w-[90%] text-center font-semibold mt-16 mb-6 text-lg '>
                Faça aqui uma breve avaliação aqui para sabermos como podemos te ajudar
            </p>

            <button className='bg-psi px-5 py-1 rounded-3xl text-white font-semibold flex items-center gap-2'>
                avaliação
                <MdSubdirectoryArrowRight className='text-lg' />
            </button>
            </div>

        </div>

      </div>
  )
}

export default HomePsi