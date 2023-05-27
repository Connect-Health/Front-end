import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Calendario from '../../../Components/Calendario/Calendario';

const CustomButton = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    setShowCalendar(true);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
  };

  return (
    <div>
      <div className={`bg-${props.fundo} rounded-3xl w-fit fixed top-[92vh] left-1/2 -translate-x-1/2 max-md:top-[87vh]`}>
        <button onClick={handleButtonClick} className='text-white py-2 px-10 max-md:px-4 '>Agendar Consulta</button>
      </div>

      <Dialog open={showCalendar} onClose={handleCalendarClose}>
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

