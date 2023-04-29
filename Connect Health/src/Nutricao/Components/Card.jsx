import React from 'react'
import Nutri1 from '../../../assets/nutri1.png'

const Card = () => {
  return (
    <div className='flex rounded-2xl border-2 bg-[#F5F5F5] bg-opacity-50 border-[#94E127] box-content'>
        <div className='w-[25%]'>
            <img src={Nutri1} className='m-auto mt-3' />

            <div className='mt-5'>
                <h4 className='text-center font-semibold'>Duração:</h4>
                <p className='text-center font-bold text-lg'>30 Minutos</p>
            </div>

            <div className='mt-7'>
                <h4 className='text-center font-semibold'>Consulta:</h4>
                <p className='text-center font-bold text-2xl mt-2'>R$35,00</p>
            </div>
        </div>

        <div className='w-[75%] '>
            <div className='w-[90%] m-auto flex flex-col'>
                    <h2 className='mt-4 font-semibold text-2xl text-center text-nutri'>Joana Dalva de Menezes</h2>

                    <div className='flex flex-wrap bg-[#D7F2E0] py-3 rounded-xl px-2 gap-1 justify-center'>
                        <p className='border w-fit rounded-lg px-2 bg-white'>Ansiedade</p>
                        <p className='border w-fit rounded-lg px-2 bg-white'>Conflitos Amorosos</p>
                        <p className='border w-fit rounded-lg px-2 bg-white'>Medos</p>
                        <p className='border w-fit rounded-lg px-2 bg-white'>Família</p>
                        <p className='border w-fit rounded-lg px-2 bg-white'>Borderline</p>
                        <p className='border w-fit rounded-lg px-2 bg-white'>+6</p>

                    </div>  

                    <div>
                        <h4 className='text-center text-lg mt-3'>Sobre mim:</h4>

                        <p className=''>Olá! Meu nome é Laysa e sou uma nutricionista apaixonada pelo meu trabalho. Eu me formei em uma universidade renomada e tenho experiência em diferentes áreas de atuação...</p>
                    </div>

                    <button className='self-end px-3 mr-[-6%] py-1.5 rounded-2xl bg-nutri bg-opacity-80 font-medium text-white'>Saiba mais</button>
            </div>
        </div>
    </div>
  )
}

export default Card