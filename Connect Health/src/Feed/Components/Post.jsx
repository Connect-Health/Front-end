import React, { useState } from 'react';
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MaxLength = 250;

const Post = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [expandPhoto, setExpandPhoto] = useState(false);

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleTogglePhoto = () => {
    setExpandPhoto(!expandPhoto);
  };

  const content = showFullContent ? post.conteudo : post.conteudo.slice(0, MaxLength);

  return (
    <div key={post.postId} className="flex text-justify shadow-md text-gray-500 text-[gray] bg-white rounded-xl mt-8 max-md:text-sm max-md:w-[200%]">
      <div className="flex flex-col items-start max-md:w-[100%]">
      <div className={`flex items-center gap-7 w-full rounded-t-xl pb-5 pt-3  ${post.profissional.areaAtuacao.areaId === 1 ? 'bg-nutri/70' : post.profissional.areaAtuacao.areaId === 2 ? 'bg-psi/70' : ''}`}>
  <Link to={`/profissional/${post.profissional.areaAtuacao.nome}/${post.profissional.profissionalId}`}>
    <img className="h-16 w-16 mt-3 ml-5 rounded-full object-cover" src={post.profissional.urlAvatar} alt="" />
  </Link>
  <div>
    <Link to={`/profissional/${post.profissional.areaAtuacao.nome}/${post.profissional.profissionalId}`} className="mt-3 text-black/90 font-bold text-lg">{post.profissional.nome} {post.profissional.sobrenome}</Link>
    <p className="text-xs mt-1 text-black/70 font-semibold">{post.horaPublicacao} - {post.dataPublicacao}</p>
  </div>
</div>
        <hr className=" border-[#8742] w-full" />
        <div className="px-[5%]">
          <p className="mt-7 pr-[5%] text-left text-black text-lg mb-5 max-md:text-sm max-md:mt-5">
            {content}
          </p>
          {post.conteudo.length > MaxLength && !showFullContent && (
            <button onClick={handleToggleContent} className="text-blue-500 mb-5 max-md:mb-5">
              Ver mais
            </button>
          )}
          <div className={`flex justify-center items-center w-full  ${expandPhoto ? 'fixed inset-0 bg-black/50 h-[100vh] z-50 transition-all duration-1000' : ''}`}>
            <img className={`max-h-60 object-cover max-w-[90%]  ${expandPhoto ? 'object-contain max-w-[80%] max-h-screen  max-md:w-[100%] transition-all duration-300' : 'transition-all duration-700'}`} src={post.imagem} alt="" onClick={handleTogglePhoto} />
          </div>
        </div>
        <hr className="mt-5 border-[#8742] w-full" />

        <div className="mt-[10px] text-[#658FF9] pl-[5%] gap-10 flex mb-2">
          <button className="flex items-center gap-2">
            <FaHeart className="hover:text-[#fc4646]" />
            Curtir
          </button>
          <button className="flex items-center gap-2">
            <FaComment />
            Comentar
          </button>
          <button className="flex items-center gap-2">
            <FaShare className="hover:text-[#4667fc]" />
            Compartilhar
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Post;