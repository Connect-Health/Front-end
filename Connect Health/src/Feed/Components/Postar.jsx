import React, { useState, useContext } from 'react';
import { BsImageFill, BsThreeDots } from 'react-icons/bs';
import { MdLocationOn, MdSubscriptions } from 'react-icons/md';
import axios from 'axios';
import { AuthContext } from '../../AutoContext/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Postar = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const { user } = useContext(AuthContext);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handlePostar = async () => {
    if (!user) {
      showLoginSnackbar();
      return;
    }

    try {
      const currentDate = new Date();
      const dataPublicacao = currentDate.toISOString().split('T')[0];
      const horaPublicacao = currentDate.toTimeString().split(' ')[0];

      const post = {
        titulo,
        conteudo,
        dataPublicacao,
        horaPublicacao,
        profissional: {
          profissionalId: user.profissionalId,
        },
      };

      const response = await axios.post('https://connect-health.up.railway.app/post', post);
      console.log(response.data);

      setTitulo('');
      setConteudo('');
      setShowSuccessAlert(true);
    } catch (error) {
      setShowErrorAlert(true);
    }
  };

  const showLoginSnackbar = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleSuccessAlertClose = () => {
    setShowSuccessAlert(false);
  };

  const handleErrorAlertClose = () => {
    setShowErrorAlert(false);
  };

  return (
    <div className='bg-white pt-3 pl-3 flex flex-col h-fit mt-10 rounded-xl mb-14 max-md:hidden'>
      <input
        type='text'
        placeholder='Título'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className='w-1/2 ml-10 py-2 pl-5 outline-none focus:border rounded-lg border-gradi/40'
      />
      <input
        type='text'
        placeholder='Escreva seu texto'
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        className='w-[90%] ml-10 py-2 pl-5 pb-10 mb-2 border-b border-gradi/40 outline-none focus:border rounded-lg mt-5'
      />

      <div className='flex justify-between items-center'>
        <div className='items-center flex gap-3 ml-10 mt-3 mb-3'>
          <BsImageFill className='text-2xl text-[#658FF9] cursor-pointer' alt="imagem" />
          <MdSubscriptions className='text-2xl text-[#658FF9] cursor-pointer' />
          <MdLocationOn className='text-2xl text-[#658FF9] cursor-pointer' />
          <BsThreeDots className='text-2xl text-[#658FF9] cursor-pointer' />
        </div>

        <div>
          <button
            className='bg-[#658FF9] text-white rounded-lg mr-10 py-2 px-4 text-sm'
            onClick={handlePostar}
          >
            Postar
          </button>
        </div>
      </div>

      <Snackbar open={showSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{vertical: 'top', horizontal:'center'}}>
        <MuiAlert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
          <p className='text-black text-lg'>Faça login como profissional para fazer o seu post.</p>
        </MuiAlert>
      </Snackbar>

      <Snackbar open={showSuccessAlert} autoHideDuration={4000} onClose={handleSuccessAlertClose} anchorOrigin={{vertical: 'top', horizontal:'center'}}>
        <MuiAlert onClose={handleSuccessAlertClose} severity="success" sx={{ width: '100%' }}>
          <p className='text-black text-lg'>Postagem feita com sucesso! Atualize a página para conferir</p>
        </MuiAlert>
      </Snackbar>

      <Snackbar open={showErrorAlert} autoHideDuration={4000} onClose={handleErrorAlertClose} anchorOrigin={{vertical: 'top', horizontal:'center'}}>
        <MuiAlert onClose={handleErrorAlertClose} severity="error" sx={{ width: '100%' }}>
          <p className='text-black text-lg'>Erro ao fazer a postagem. Tente novamente.</p>
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Postar;