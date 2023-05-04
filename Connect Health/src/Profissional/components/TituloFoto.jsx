import React from 'react'

const TituloFoto = () => {
  return (
    <div className='flex items-center w-full'>
        <div className='w-1/4 border-nutri border h-5'>
            <img src="" alt="" />
            ok
        </div>

        <div className='w-3/4 border-psi border'>
            <div className='flex gap-32 items-center mt-3'>
                <h1 className='pl-10 text-3xl'>Laysa Lopes da Silva</h1>
                <p className='font-semibold'>Favoritar</p>
            </div>

            <div className='flex gap-20 pl-14 items-center mt-2'>
                <p className='font-semibold text-lg'>Nutricionista</p>

                <p>"estrelas"</p>
            </div>

            <div className='flex pl-12 gap-[20%] items-center mt-5'>
                <div>
                    <p className='text-center'>Duração:</p>
                    <p className='font-bold text-lg text-center'>30 minutos</p>
                </div>
                <div>
                    <p className='text-center'>Consulta:</p>
                    <p className='font-bold text-xl text-center'>R$50,00</p>
                </div>

                <div>
                    <p className='text-center'>Atende:</p>
                    <p className='font-bold text-center'>idosos</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TituloFoto