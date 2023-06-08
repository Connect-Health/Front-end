import React from 'react'

const Empresas = () => {
  return (
    <div className='flex bg-white mt-3  rounded mb-10 border border-gradi/30'>
        <div className='flex flex-col items-center w-1/5 bg-[#9cc9fc]/20 pt-3 border-r border-gradi/30'>
            <img src="https://logospng.org/download/itau/logo-itau-4096.png" className='w-14 h-14' />

            <div className='flex flex-col items-center justify-center h-[60%]'>
                <p className='mt-3'>Valor:</p>
                <p>R$150 mil</p>
                <p className='mt-6'>Consulta:</p>
                <p>Presencial</p>
            </div>
            
        </div>

        <div className='flex flex-col items-center w-4/5 pt-5'>
            <h2 className='text-lg font-semibold'>Itaú Unibanco</h2>
            <h4 className='font-semibold text-sm'>São paulo, SP</h4>

            <p className='mb-1 mt-4'>Profissionais necessários:</p>
            <div className='flex gap-5 w-[95%] mx-auto bg-[#fcf29c] py-1.5 justify-center rounded'>
                <p>50 psicologos</p>
                <p>50 nutricionistas </p>
            </div>

            <h4 className='font-bold mt-3'>Sobre a empresa</h4>

            <p className='w-[90%] mx-auto text-sm mt-1'>O Itaú Unibanco é um dos maiores bancos brasileiros e uma das maiores instituições financeiras da América Latina...</p>

            <button className='px-5 mx-auto bg-[#fcf29c] mt-3 py-1 rounded mb-2'>Saiba mais</button>
        </div>
        
    </div>
  )
}

export default Empresas