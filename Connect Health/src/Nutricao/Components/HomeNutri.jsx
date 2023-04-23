import React from 'react'
import Header from './HeaderNutri'
import { MdSubdirectoryArrowRight } from "react-icons/md"
import BackGround from '../../../assets/nutricao.png'

import { useEffect, useState } from 'react';
import AnimatedLetters from '../../Components/Letters/AnimatedLetters'


const HomeNutri = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
        return  setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <div className='h-[650px] flex flex-col'>
      <img src={BackGround} className='absolute -z-10 h-[650px] w-full' alt="" />
        <Header />
        <div className='h-[655px] w-[430px] mt-[-55px] bg-white/40 relative self-end flex justify-center items-center flex-col'>

          <h2 className='w-[85%] font-bold text-3xl text-center mt-10'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'A', 
              ' ', 
              'n', 
              'u', 
              't', 
              'r', 
              'i', 
              'ç', 
              'ã', 
              'o', 
              ' ', 
              'é', 
              ' ', 
              'a', 
              ' ', 
              'b',
              'a', 
              's', 
              'e', 
              ' ', 
              'd', 
              'a',
            ]}
            idx={20} 
          /> 
          
          <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'S',
              'a',
              'ú',
              'd',
              'e',
            ]}
            idx={5}
          /> <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'C',
              'o',
              'm',
              'a',
              ' ',
              'b',
              'e',
              'm',
              ',',
              ' ',
              's',
              'i',
              'n',
              't',
              'a',
              '-',
              's',
              'e',
            ]}
            idx={18}
          /> <br />

          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'b',
              'e',
              'm',
              ' ',
              'e',
              ' ',
              'v',
              'i',
              'v',
              'a',
              ' ',
              'b',
              'e',
              'm',
              '!',
            ]}
            idx={18}
          />

          
          </h2>

          <p className='w-[90%] text-center font-semibold mt-16 mb-6 text-lg '>
            Faça aqui uma breve avaliação aqui para sabermos como podemos te ajudar
          </p>

          <button className='bg-[#1DDC53] px-5 py-1 rounded-3xl text-white font-semibold flex items-center gap-2'>
            avaliação
            <MdSubdirectoryArrowRight className='text-lg' />
          </button>
        </div>

      </div>
  )
}

export default HomeNutri