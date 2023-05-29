import React from 'react'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa'

const Post = ({post}) => {
  return (
    <div key={post.postId} className="flex text-justify shadow-md text-gray-500  text-[gray] bg-white rounded-xl mt-8">
            <div className="flex flex-col items-start">
              <div className='flex items-center gap-7'>
                <img className="h-16 w-16 mt-3 ml-5 rounded-full object-cover" src={post.profissional.urlAvatar} alt="" />
                <div>
                  <h3 className="mt-3 text-black/70 font-bold">{post.profissional.nome} {post.profissional.sobrenome}</h3>
                  <p className="text-xs mt-1 ">12 Horas atrás</p>
                </div>
              </div>
              <hr className="mt-3 border-[#8742] w-full" />
              <div className='px-[5%]'>
                  <p className='mt-10 pr-[5%] text-justify text-black text-lg'>{post.conteudo}</p>
                  <img className=" m-auto mt-7  " src={post.imagem} alt="" />
              </div>
              <hr className="mt-5 border-[#8742] w-full" />
              
              <div className='mt-[10px] text-[#658FF9] pl-[5%] gap-10 flex mb-2 '>
                <button className='flex items-center gap-2'>
                  <FaHeart className='hover:text-[#fc4646]' />
                  Curtir
                </button>
                <button className='flex items-center gap-2'>
                  <FaComment />
                  Comentar
                </button>
                <button className='flex items-center gap-2'>
                  <FaShare className='hover:text-[#4667fc]' />
                  Compartilhar
                </button>
              </div>
              <hr></hr>
              </div>
              </div>
  )
}

export default Post