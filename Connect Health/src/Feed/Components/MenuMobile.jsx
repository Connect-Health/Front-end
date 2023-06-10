import React, { useContext, useState } from 'react';
import { Box, Button, BottomNavigation, BottomNavigationAction, Snackbar, Backdrop } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '../../AutoContext/AuthContext';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import ImageIcon from '@mui/icons-material/Image';
import axios from 'axios';

const MenuMobile = () => {
    const { user } = useContext(AuthContext);
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
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
    
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-full fixed bottom-0 hidden max-md:block">
        <Box >
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction onClick={handleOpenModal}  label="Postar" value="Postar" icon={<AddIcon className='text-azulsite' />} />
            </BottomNavigation>
        </Box>

      <Backdrop open={openModal} onClose={handleCloseModal} className='fixed z-50 h-screen'>
        <div className="w-full h-screen bg-white">
          <Button className='absolute left-0 top-2' onClick={handleCloseModal}><CloseIcon /></Button>
          <h2 className='text-center text-lg mt-3'>Fazer uma Publicação</h2>

            <div className='mt-10 w-4/5 mx-auto'>
                <fieldset className='border pl-5 rounded-2xl'>
                    <legend className='font-semibold text-gradi'>Título:</legend>
                    <input type="text" className='w-[95%] outline-none pb-2' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </fieldset>

                <fieldset className='border pl-5 rounded-2xl'>
                    <legend className='font-semibold text-gradi'>Conteudo:</legend>
                    <textarea type="text" placeholder='Quais as novidades para hoje?' className='w-[95%] outline-none pb-2 h-[40vh]' value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
                </fieldset>

                <div className='flex items-end gap-2 mt-2'>
                    <ImageIcon sx={{ fontSize: 30 }} color='primary' />
                    <p>Adicionar Imagem</p>
                </div>

                <button className='absolute left-1/2 -translate-x-1/2 mt-5 bottom-7 py-2 bg-azulsite w-[80%] rounded-lg font-bold text-white' onClick={handlePostar}>Enviar</button>

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
      </Backdrop>
    </div>
  );
};

export default MenuMobile;
