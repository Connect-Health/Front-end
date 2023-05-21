import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import Rating from '@mui/material/Rating';
import { FaMedal } from 'react-icons/fa';


const TituloFoto = ( { profissional }) => {
    const [isFav, setIsfav] = useState(false);

    function handleClick() {
        setIsfav(!isFav);
    }

const nota = profissional.avaliacao || 0

  return (
    <div className='flex items-center w-full'>
        <div className='w-1/4 flex justify-center -mt-20'>
            <img src={profissional.urlAvatar} className='w-3/4 rounded-full border-2 border-nutri relative z-10' alt="Imagem de perfil do Profissional" />
            <FaMedal className='relative self-end ml-[-65px] text-5xl mb-[-25px]'/>
        </div>

        <div className='w-3/4'>
            <div className='flex gap-40 items-center mt-3'>
                <h1 className='pl-10 text-3xl'>{profissional.nome} {profissional.sobrenome}</h1>
                <p onClick={handleClick} className='font-semibold flex items-center gap-2 '>
                    {isFav ? <MdOutlineFavorite className='text-2xl text-nutri' /> : <MdOutlineFavoriteBorder className='text-2xl text-nutri' />}
                    
                    Favoritar
                </p>
            </div>

            <div className='flex gap-20 pl-14 items-center mt-2'>
                {profissional && profissional.areaAtuacao && profissional.areaAtuacao.nome && (
                    <p className='font-semibold text-lg'>{profissional.areaAtuacao.nome}</p>
                )}
                <div className='flex items-end gap-2'>
                    <Rating
                        name="text-feedback"
                        value={nota}
                        readOnly
                        precision={0.5}
                    />
                    <p className='font-bold'>{nota.toFixed(1)}</p>
                    
                </div>
            </div>

            <div className='flex pl-12 gap-[20%] items-center mt-5'>
                <div>
                    <p className='text-center'>Duração:</p>
                    <p className='font-bold text-lg text-center'>{profissional.duracao}min</p>
                </div>
                <div>
                    <p className='text-center'>Consulta:</p>
                    <p className='font-bold text-xl text-center'>R${profissional.preco},00</p>
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