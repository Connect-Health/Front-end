import React from 'react'
import Vetor from '../../assets/Vector.svg'

const Detalhes = (props) => {
  return (
    <div className={`flex justify-between gap-14 mb-12 ${props.pai}`}>
        <img src={props.imagem} alt="ondas de fundo" className='border-0 absolute' />

        <div className='text-center text-white mt-5 mb-5 w-1/3 ml-5 '>
            <h2 className='text-2xl font-semibold drop-shadow-xl mb-4'>Nossos Planos</h2>
            <p className='text-lg drop-shadow-md'>Nós oferecemos planos mensais e consultas avulsas a preços acessíveis, para tornar nossos serviços de consultoria em nutrição acessíveis a todos os interessados em investir em sua saúde e bem-estar.</p>
        </div>

        <div className='text-center text-white mt-5 mb-5 w-1/3 border-x-2  px-14 box-content '>
            <h2 className='text-2xl font-semibold drop-shadow-xl mb-4'>Nossos Profissionais</h2>
            <p className='text-lg drop-shadow-md'>Contamos com uma equipe de profissionais altamente qualificados, formados nas melhores faculdades e universidades, prontos para fornecer serviços de consultoria em nutrição de excelência</p>
        </div>

        <div className='text-center text-white mt-5 mb-5 w-1/3 mr-10'>
            <h2 className='text-2xl font-semibold drop-shadow-xl mb-4'>Consultas On-line</h2>
            <p className='text-lg drop-shadow-md'>Aproveite a comodidade e praticidade de nossos serviços de consultoria em nutrição online, sem a necessidade de sair de casa ou enfrentar longas filas e processos burocráticos.</p>
        </div>
    </div>
  )
}

export default Detalhes