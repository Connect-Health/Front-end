import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import recomendar from '../../../assets/recomendar.png';


const Recomendacoes = () => {
  return (
    <div className=' w-[20%] bg-white mt-10'>
        <div className='flex items-center justify-around mt-10 pb-5 border-b-2 border-gradi/10'>
            <h2>recomendações</h2>
            <BsThreeDots />
        </div>

        <img src={recomendar} alt="" className='m-auto mt-5' />
    </div>
  )
}

export default Recomendacoes