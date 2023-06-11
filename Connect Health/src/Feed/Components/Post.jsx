import React, { useState, useEffect } from 'react';
import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiFillDelete, AiOutlineSend } from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BsFillSendFill } from 'react-icons/bs';

const MaxLength = 250;

const Post = ({ post, user }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [expandPhoto, setExpandPhoto] = useState(false);
  const [showCommentSentAlert, setShowCommentSentAlert] = useState(false);
  const [userId, setUserId] = useState('');

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [showComentarios, setShowComentarios] = useState(false);
  const [novoComentario, setNovoComentario] = useState('');

  const handleCloseAlerta = () => {
    setShowDeleteAlert(false);
    setShowCommentSentAlert(false); 
  };

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await axios.get(`https://connect-health.up.railway.app/comentario/post/${post.postId}`);
        setComentarios(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (showComentarios) {
      fetchComentarios();
    }
  }, [post.postId, showComentarios]);

  useEffect(() => {
    if (user) {
      setUserId(user.pacienteId || user.profissionalId);
    }
  }, [user]);

  const handleCloseAlert = () => {
    setShowDeleteAlert(false);
    setShowCommentSentAlert(false); // Close the comment sent alert
  };

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const handleTogglePhoto = () => {
    setExpandPhoto(!expandPhoto);
  };

  const content = showFullContent ? post.conteudo : post.conteudo.slice(0, MaxLength);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://connect-health.up.railway.app/post/${post.postId}`);
      setShowDeleteAlert(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleComentarios = () => {
    setShowComentarios(!showComentarios);
  };

  const handleNovoComentario = (e) => {
    setNovoComentario(e.target.value);
  };

  const handleEnviarComentario = async () => {
    try {
      const comentarioData = {
        comentario: novoComentario,
        post: {
          postId: post.postId,
        },
        paciente: {
          pacienteId: user.pacienteId,
        },
      };

      await axios.post('https://connect-health.up.railway.app/comentario', comentarioData);
      setNovoComentario('');
      setShowComentarios(true);
      setShowCommentSentAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComentario = async (comentarioId) => {
    try {
      await axios.delete(`https://connect-health.up.railway.app/comentario/${comentarioId}`);
      setShowComentarios(true); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={post.postId} className="flex text-justify shadow-md text-gray-500 text-[gray] bg-white rounded-xl mt-8 max-md:text-sm max-md:w-[100%] w-full">
      <div className="flex flex-col items-start max-md:w-[100%] w-full">
        <div className={`flex items-center w-full justify-between rounded-t-xl pb-5 pt-3  ${post.profissional.areaAtuacao.areaId === 2 ? 'bg-nutri/70' : post.profissional.areaAtuacao.areaId === 1 ? 'bg-psi/70' : ''}`}>
          <div className='flex items-center gap-7'>
            <Link to={`/profissional/${post.profissional.areaAtuacao.nome}/${post.profissional.profissionalId}`}>
              <img className="h-16 w-16 mt-3 ml-5 rounded-full object-cover" src={post.profissional.urlAvatar} alt="" />
            </Link>
            <div>
              <Link to={`/profissional/${post.profissional.areaAtuacao.nome}/${post.profissional.profissionalId}`} className="mt-3 text-black/90 font-bold text-lg">{post.profissional.nome} {post.profissional.sobrenome}</Link>
              <p className="text-xs mt-1 text-black/70 font-semibold">{post.horaPublicacao} - {post.dataPublicacao}</p>
            </div>
          </div>
          {user && post.profissional.profissionalId === user.profissionalId && (
            <button onClick={handleDelete} className="pr-10">
              <Tooltip title="Deletar">
                <AiFillDelete className='text-xl text-white' />
              </Tooltip>
            </button>
          )}
        </div>
        <hr className=" border-[#8742] w-full" />
        <div className="px-[5%]">
          <p className="mt-7 w-full text-left text-black text-lg mb-5 max-md:text-sm max-md:mt-5">
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
          <button className="flex items-center gap-2" onClick={handleToggleComentarios}>
            <FaComment />
            Comentários
          </button>
        </div>
        <hr />
        {showComentarios && (
          <div className="ml-[5%] mt-2 w-[100%]">
            <div className='flex gap-5  mb-5'>
              <img src={user.urlAvatar} className='h-10 w-10 object-cover rounded-full object-top' alt="" />
              <input type="text" placeholder='Seu comentário' className='w-4/5 rounded-3xl pl-5 border border-gradi/50 focus:border-black outline-none placeholder:text-sm' value={novoComentario} onChange={handleNovoComentario} />
              <button onClick={handleEnviarComentario}>
                <AiOutlineSend className='text-2xl -ml-14' />
              </button>
            </div>
            {comentarios.map((comentario) => (
              <div key={comentario.comentarioId} className="w-[90%] bg-[#ebebeb]/50 pt-3 pl-3 pr-3 pb-1 mb-5 rounded-lg">
                <div className='flex gap-3 items-center border-b pb-3 border-gradi/20'>
                  <img className='h-8 w-8 object-cover rounded-full' src={comentario.paciente.urlAvatar} alt="imagem" />
                  <p className='font-semibold'>{comentario.paciente.nome} {comentario.paciente.sobrenome}</p>
                  {comentario.paciente.pacienteId === userId && (
                    <button onClick={() => handleDeleteComentario(comentario.comentarioId)}>
                      <AiFillDelete className='text-xl text-white' />
                    </button>
                  )}
                </div>
                <p className="mt-3 mb-2 pl-5">{comentario.comentario}</p>
              </div>
            ))}
          </div>
        )}
        <Snackbar open={showDeleteAlert} autoHideDuration={4000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <MuiAlert onClose={handleCloseAlerta} severity="success" sx={{ width: '100%' }}>
            <p className='uppercase font-semibold'>Postagem deletada</p>
          </MuiAlert>
        </Snackbar>
        <Snackbar
          open={showCommentSentAlert}
          autoHideDuration={4000}
          onClose={handleCloseAlerta}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert onClose={handleCloseAlerta} severity="success" sx={{ width: '100%' }}>
            <p className='uppercase font-semibold'>Comentário enviado</p>
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Post;