import React from 'react'
import Fundo from '../../../assets/fundo.png'
import Icone from '../../../assets/nutricon1.jpg'

import TituloFoto from './TituloFoto'

import Informacoes from './Informacoes'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Perfil = () => {
  const { id } = useParams();

  const [profissional, setProfissional] = useState({})

  useEffect(() => {
    async function fetchProfissionais() {
      try {
        const response = await axios.get(`http://localhost:8080/profissionais/nutricionistas`)
        const profissionalEncontrado = response.data.find(profissional => profissional.id === parseInt(id))
        setProfissional(profissionalEncontrado)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfissionais()
  }, [id])

  console.log(profissional)


  return (
    <div className=' w-4/5 m-auto rounded-3xl mt-10 border bg-[#f0f0f0]/70 backdrop-blur-md '>
        <div className=' w-full'>
            <img src={Fundo} className='h-36 w-full object-cover rounded-tl-3xl rounded-tr-3xl border-b' alt="" />
            <TituloFoto profissional={profissional}
            />
            <Informacoes />
            
        </div>
    </div>
  )
}

export default Perfil