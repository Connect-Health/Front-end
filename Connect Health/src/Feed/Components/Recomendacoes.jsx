import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import recomendar from '../../../assets/recomendar.png';
import personal from '../../../assets/personal.png';



const Recomendacoes = () => {
  return (
    <div className=' w-[20%] bg-white mt-10 mb-5 h-fit fixed right-[2.5%] top-20
    max-md:hidden
    '>
        <div className='flex items-center justify-around mt-10 pb-5 border-b-2 border-gradi/10'>
            <h2>recomendações</h2>
            <BsThreeDots />
        </div>

        <a href='https://www.cnnbrasil.com.br/nacional/por-cfn-comprometidos-com-os-17-ods-da-onu-sistema-conselhos-federal-e-regionais-de-nutricionistas-atua-para-promover-a-sustentabilidade-e-garantir-a-saude-e-a-seguranca-alimentar-e-nutricional-da/' target='_blank'>
            <img src={recomendar} alt="" className='m-auto pt-5 mt-5' />
            <h3 className='text-center mt-3'>CFN</h3>
            <p className='w-4/5 m-auto mt-5 text-sm text-gradi pb-5 border-b border-gradi/10'>Comprometidos com os 17 ODS da ONU, Sistema Conselhos Federal e Regionais de Nutricionistas atua para promover a sustentabilidade e garantir a saúde e a segurança alimentar e nutricional da população</p>
        </a>
    </div>

  )
}

export default Recomendacoes