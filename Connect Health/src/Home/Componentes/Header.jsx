import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import vetor from '../../../assets/vectorHome.svg'

const Header = () => {
  return (
    <div id='home' className='relative z-50'>
      <div className='flex justify-between items-center py-3 px-10 bg-gradient-to-t to-gradi/60 from-white/0'>
        <div className='flex gap-10 z-10 '>
          <Link to='/psicologia' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Psicologia</Link>
          <Link to='/nutricao' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Nutrição</Link>
          <Link to='/' className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</Link>
        </div>
        <div className='bg-[#0575E6] h-auto w-40 absolute z-50 top-0 right-20 items-center flex-col
        max-md:h-32 max-md:w-28
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