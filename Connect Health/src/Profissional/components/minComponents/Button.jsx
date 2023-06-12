import React, { useContext, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Calendario from '../../../Components/Calendario/Calendario';
import { AuthContext } from '../../../AutoContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const CustomButton = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleButtonClick = () => {
    setShowCalendar(true);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  const handleAgendarConsulta = () => {
    if (user && user.pacienteId !== null) {
      handleButtonClick();
    } else {
      navigate('/login');
      console.log("not ok")
    }
  };

  return (
    <div>
      <div className={`bg-${props.fundo} rounded-3xl w-fit fixed top-[92vh] left-1/2 -translate-x-1/2 max-md:top-[87vh]`}>
        <button onClick={handleAgendarConsulta} className='text-white py-2 px-10 max-md:px-4 '>Agendar Consulta</button>
      </div>

      <Dialog open={showCalendar} onClose={handleCalendarClose} className=''>
        <DialogTitle>Agendar Consulta</DialogTitle>
        <DialogContent>
          <Calendario onClose={handleCalendarClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCalendarClose} color="secondary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomButton;

