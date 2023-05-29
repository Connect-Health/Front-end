import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import recomendar from '../../../assets/recomendar.png';
import personal from '../../../assets/personal.png';



const Recomendacoes = () => {
  return (
    <div className=' w-[20%] bg-white mt-10 mb-5 h-fit'>
        <div className='flex items-center justify-around mt-10 pb-5 border-b-2 border-gradi/10'>
            <h2>recomendações</h2>
            <BsThreeDots />
        </div>

        <img src={recomendar} alt="" className='m-auto pt-5 mt-5' />
        <h3 className='text-center mt-3'>CFN</h3>
        <p className='w-4/5 m-auto mt-5 text-sm text-gradi pb-5 border-b border-gradi/10'>Comprometidos com os 17 ODS da ONU, Sistema Conselhos Federal e Regionais de Nutricionistas atua para promover a sustentabilidade e garantir a saúde e a segurança alimentar e nutricional da população</p>

        <img src={personal} alt="" className='m-auto mt-5' />
        <h3 className='text-center mt-3'>Univerdade de futebol</h3>
        <p className='w-4/5 m-auto mt-5 text-sm text-gradi'>A  Psicologia do Esporte é importante para entender a influência dos fatores psicológicos no desempenho físico de um indivíduo e como a participação em esportes e exercício afeta o desenvolvimento psicológico, a saúde e o bem estar de uma pessoa.</p>
        
        <p className='text-azulsite text-center text-xs font-semibold mt-5 mb-5'>Veja mais</p>
    </div>
  )
}

export default Recomendacoes