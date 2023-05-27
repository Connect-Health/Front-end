import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Snackbar } from '@mui/material';

const Calendario = () => {
  const [selectedDates, setSelectedDates] = useState(Array.from({ length: 7 }, () => null));
  const [selectedHour, setSelectedHour] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [hourIntervals, setHourIntervals] = useState(createHourIntervals());

  const handleDateClick = (index, date) => {
    setSelectedDates((prevDates) => {
      const updatedDates = [...prevDates];
      updatedDates[index] = updatedDates[index] ? null : date;
      return updatedDates;
    });
    setSelectedHour(null);
    setShowConfirmation(false);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setSelectedHour(null);
    setShowConfirmation(false);
  };

  const handleConfirmAppointment = () => {
    console.log('Consulta confirmada!');
    setShowConfirmation(false);
    setShowSnackbar(true);

    const updatedIntervals = hourIntervals.map((interval) => {
      if (interval.time === selectedHour) {
        return { ...interval, available: false };
      }
      return interval;
    });

    setHourIntervals(updatedIntervals);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  function createHourIntervals() {
    const startHour = 8;
    const endHour = 17;
    const interval = 1;
    const intervals = [];

    for (let i = startHour; i <= endHour; i += interval) {
      intervals.push({ time: `${i}:00`, available: true });
    }

    return intervals;
  }

  return (
    <div>
      <h1>Calendário</h1>
      <div className="flex gap-2 bg-gradi/10 shadow-md py-5 px-2 w-fit">

        {Array.from({ length: 7 }, (_, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index);

          return (
            <div key={index}>
              <button
                onClick={() => handleDateClick(index, date)}
                className={`${
                  selectedDates[index] && selectedDates[index].toDateString() === date.toDateString()
                    ? 'bg-azulsite/70 text-white'
                    : 'bg-azulsite/50'
                } rounded w-14 py-1`}
              >
                <div className="leading-tight">{date.toLocaleDateString('pt-BR', { weekday: 'short' })}</div>
                <div className="leading-none">{date.getDate()}</div>
              </button>

              {selectedDates[index] && selectedDates[index].toDateString() === date.toDateString() && (
                <div className={`available-hours transition-all duration-500 ${selectedDates[index] ? 'h-auto' : 'h-0'}`}>
                  <ul>
                    {hourIntervals.map((interval, intervalIndex) => (
                      <li
                        key={interval.time}
                        onClick={() => handleHourClick(interval.time)}
                        className={`${
                          interval.available ? 'bg-[#5ef371]/30 text-black' : 'bg-black/5 text-white'
                        } p-2 text-center ${intervalIndex === hourIntervals.length - 1 ? '' : 'mb-1'}`}
                        disabled={!interval.available}
                      >
                        {interval.time}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Dialog open={showConfirmation} onClose={handleConfirmationClose} className="">
        <DialogTitle className=" text-center">Confirmar Consulta</DialogTitle>
        <DialogContent className=" text-center">
          <p>Data: {selectedDates.find((date) => date !== null)?.toLocaleDateString('pt-BR')}</p>
          <p>Hora: {selectedHour}</p>
        </DialogContent>
        <DialogActions className="flex justify-between">
          <Button onClick={handleConfirmationClose} color="secondary">
            Cancelar
          </Button>
          <div className="flex justify-end">
            <Button onClick={handleConfirmAppointment} color="primary">
              Confirmar
            </Button>
          </div>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Consulta confirmada!"
        className={` text-white`} // Adiciona uma classe personalizada para definir a cor de fundo do Snackbar
      />
    </div>
  );
};

export default Calendario;