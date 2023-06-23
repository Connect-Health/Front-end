import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Perfil from '../../Components/Perfil';



const Comentario = ({ comentario, user, userId, onDeleteComentario }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    const handleCloseAlert = () => {
        setShowDeleteAlert(false);
        setShowCommentSentAlert(false);
      };

    const handleDelete = () => {
      setShowDeleteAlert(true);
      onDeleteComentario(comentario.comentarioId);
      setTimeout(() => {
          window.location.reload();
      }, 1000);
    };

  return (
    <div className="w-[90%] bg-[#ebebeb]/50 pt-3 pl-3 pr-3 pb-1 mb-5 rounded-lg">
      <div className="flex justify-between items-center border-b pb-3 border-gradi/20">
        <div className='flex gap-3 items-center'>
            <Perfil />
            <p className="font-semibold">
            {comentario.paciente.nome} {comentario.paciente.sobrenome}
            </p>
        </div>
        {comentario.paciente.pacienteId === userId && (
          <button onClick={handleDelete}>
            <AiFillDelete className="text-xl text-black/50" />
          </button>
        )}
      </div>
      <p className="mt-3 mb-2 pl-5">{comentario.comentario}</p>
      

      <Snackbar
          open={showDeleteAlert}
          autoHideDuration={4000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            <p className='uppercase font-semibold'>Comentário excluído</p>
          </MuiAlert>
        </Snackbar>
    </div>
  );
};

export default Comentario;