import React from 'react'

const TituloFoto = () => {
  return (
    <div className='flex items-center w-full'>
        <div className='w-1/4 border-nutri border h-5'>
            <img src="" alt="" />
            ok
        </div>

        <div className='w-3/4 border-psi border'>
            <div className='flex gap-32 items-center'>
                <h1 className='pl-10 text-3xl'>Laysa Lopes da Silva</h1>
                <p className='font-semibold'>Favoritar</p>
            </div>

            <div>
                <p>Nutricionista</p>

                <p>"estrelas"</p>
            </div>
        </div>
    </div>
  )
}

export default TituloFoto