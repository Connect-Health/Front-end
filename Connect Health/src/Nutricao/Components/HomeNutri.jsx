import React from 'react'
import Header from './HeaderNutri'
import { MdSubdirectoryArrowRight } from "react-icons/md"

const HomeNutri = () => {
  return (
    <div className='bg-nutriImg h-[650px] flex flex-col'>
        <Header />
        <div className='h-[655px] w-[430px] mt-[-55px] bg-white/40 relative self-end flex justify-center items-center flex-col'>

          <h2 className='w-[80%] font-bold text-3xl text-center mt-10'>
            A nutrição é a base da saúde.<br /> Coma bem, sinta-se bem e viva bem!
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