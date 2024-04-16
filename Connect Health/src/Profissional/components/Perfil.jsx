import React from 'react'

import TituloFoto from './TituloFoto'


import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Avaliacoes from './minComponents/Avaliacoes'
import Especialidades from './minComponents/Especialidades'
import Sobre from './minComponents/Sobre'


const Perfil = (props, {color}) => {
  const { id } = useParams();

  const [profissional, setProfissional] = useState({})

  useEffect(() => {
    async function fetchProfissionais() {
      try {
        const response = await axios.get(`https://connecthealth-backend.onrender.com/profissional/${props.areaUrl}`)
        const profissionalEncontrado = response.data.find(profissional => profissional.profissionalId === parseInt(id))
        setProfissional(profissionalEncontrado)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfissionais()
  }, [id])



  return (
    <div className=' w-4/5 m-auto rounded-3xl mt-10 border bg-[#fff]/70 backdrop-blur-md pb-4
        max-md:w-full max-md:mt-0 border-none max-md:rounded-none max-md:bg-white/80
    '>
        <div className=' w-full'>
            <img src={props.fundo} className='h-36 w-full object-cover rounded-tl-3xl rounded-tr-3xl border-b max-md:rounded-none' alt="" />
            <TituloFoto profissional={profissional} nota={profissional.avaliacao} color={color}
            />
            <div className='flex gap-[2%] mt-16 max-md:block max-md:mt-6'>
              <div className='w-3/5 ml-5 max-md:w-full max-md:ml-0'>
                <Especialidades profissional={profissional}   />
                <Sobre profissional={profissional}/>
              </div>

              <div className='w-2/5 max-md:w-full'>
                <Avaliacoes profissional={profissional} />
              </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Perfil