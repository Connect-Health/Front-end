import React from 'react'
import { Link } from 'react-router-dom'
import Modo from '../../../assets/mode.png'
import {BsArrowRight} from 'react-icons/bs'
import vetor from '../../../assets/vectorHome.svg'
import BarsSolid from '../../../assets/bars-solid.svg'

import { useState, useEffect } from "react"

const Header = () => {
  const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            
        } else {
            document.documentElement.classList.remove("dark");
            
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
    <div id='home' className='relative z-50'>
      <div className='flex justify-between items-center py-3 px-10 bg-gradient-to-t to-gradi/60 from-white/0'>
        <div className='flex gap-10 z-10 
        max-md:-ml-5 max-md:w-[90%] 
        '>
          <img className='max-md:h-6 max-md:block hidden' src={BarsSolid} alt="" />
          <Link to='/' className='hidden max-md:block max-md:m-auto max-md:text-xl max-md:font-semibold'>Connect<span className='text-[#5D59FF]'>Health</span></Link>
          <Link to='/psicologia' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300
          max-md:hidden
          '>Psicologia</Link>
          <Link to='/nutricao' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300
          max-md:hidden
          '>Nutrição</Link>
          <Link to='/' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300
          max-md:hidden
          '>Cadastro</Link>
          <img className='cursor-pointer dark:invert' src={Modo} alt="" onClick={handleThemeSwitch} />
        </div>
        <div className='bg-[#0575E6] h-auto w-40 absolute z-50 top-0 right-20 items-center flex-col
        max-md:hidden
        '>
          <img src={vetor} alt=""  className='absolute'/>
          <div>
            <h2 className='text-[#fff] text-center pt-20 pb-6
            max-md:text-[10px] max-md:pt-10 max-md:pb-2
            '>Tenha dicas dos melhores da área</h2>
          </div>
            
          <div className='flex items-center justify-center gap-4 pb-4 hover:scale-110 hover:font-semibold transition duration-300'>
              <Link to='/' className='text-[#fff] text-center font-bold text-sm 
              max-md:text-[10px] max-md:mt-4
              '>Nosso Feed</Link>
              <BsArrowRight className='text-lg text-[#fff]
              max-md:mt-4 max-md:-ml-3
              '/>
          </div>  
        </div>

        

       

       
      </div>
    </div>
  )
}

export default Header