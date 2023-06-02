import React, { useState } from 'react';
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';

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
        <div className="flex items-center gap-7">
          <img className={`h-16 w-16 mt-3 ml-5 rounded-full object-cover`} src={post.profissional.urlAvatar} alt="" />
          <div>
            <h3 className="mt-3 text-black/70 font-bold">{post.profissional.nome} {post.profissional.sobrenome}</h3>
            <p className="text-xs mt-1">{post.horaPublicacao} - {post.dataPublicacao}</p>
          </div>
        </div>
        <hr className="mt-3 border-[#8742] w-full" />
        <div className="px-[5%]">
          <p className="mt-10 pr-[5%] text-left text-black text-lg mb-5 max-md:text-sm max-md:mt-5">
            {content}
          </p>
          {post.conteudo.length > MaxLength && !showFullContent && (
            <button onClick={handleToggleContent} className="text-blue-500 mb-5 max-md:mb-5">
              Ver mais
            </button>
          )}
          <div className={`flex justify-center items-center w-full  ${expandPhoto ? 'fixed inset-0 bg-black/50 h-[100vh]' : ''}`}>
            <img className={`max-h-60 object-cover max-w-[90%] ${expandPhoto ? 'object-contain max-w-[80%] max-h-screen  max-md:w-[100%]' : ''}`} src={post.imagem} alt="" onClick={handleTogglePhoto} />
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