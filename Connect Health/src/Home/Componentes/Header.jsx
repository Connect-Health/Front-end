import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center py-3 px-10 bg-gradi bg-opacity-50'>
        <div className='flex gap-10 z-10 '>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Psicologia</h2>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Nutrição</h2>
          <h2 className='text-white uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300'>Cadastro</h2>

            
        </div>
        <div className='bg-[#0575E6] h-auto w-40 absolute ml-[1200px] items-center flex-col'>
          <div>
            <h2 className='text-[#fff] w-full text-center pt-28 pb-6 '>Tenha dicas dos melhores da área</h2>
          </div>
            
          <div className='flex w-full items-center justify-center gap-4 pb-6'>
              <h2 className='text-[#fff] text-center font-bold '>Nosso Feed</h2>
              <BsArrowRight className='text-lg text-[#fff]'/>
          </div>
            
        </div>

        

       

       
      </div>
    </div>
  )
}

export default Header