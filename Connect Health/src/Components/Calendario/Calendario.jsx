import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Snackbar } from '@mui/material';

const Calendario = () => {
  const [selectedDates, setSelectedDates] = useState(Array.from({ length: 7 }, () => null));
  const [selectedHour, setSelectedHour] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [hourIntervals, setHourIntervals] = useState(createHourIntervals());
  const [disabledHours, setDisabledHours] = useState([]);

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

    const updatedDisabledHours = [...disabledHours, { date: selectedDates.find((date) => date !== null), hour: selectedHour }];
    setDisabledHours(updatedDisabledHours);

    const updatedIntervals = hourIntervals.map((day) => {
      const { date, intervals } = day;
      if (date.toDateString() === selectedDates.find((date) => date !== null)?.toDateString()) {
        const updatedIntervals = intervals.map((interval) => {
          if (interval.time === selectedHour) {
            return { ...interval, available: false };
          }
          return interval;
        });
        return { date, intervals: updatedIntervals };
      }
      return day;
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

    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    const updatedIntervals = intervals.map((interval) => ({
      ...interval,
      available: currentDayOfWeek !== 0 && currentDayOfWeek !== 6, // Disponível apenas de segunda a sexta-feira
    }));

    const hourIntervals = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return { date, intervals: updatedIntervals };
    });

    return hourIntervals;
  }

  

  return (
    <div>
      <h1>Calendário</h1>
      <div className="flex gap-2 bg-gradi/10 shadow-md py-5 px-2 w-fit">
        {hourIntervals.map((day, index) => {
          const { date, intervals } = day;
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
                    {intervals.map((interval, intervalIndex) => (
                      <li
                        key={interval.time}
                        onClick={() => handleHourClick(interval.time)}
                        className={`${
                          !interval.available(date, interval.time)
                            ? 'bg-[#5ef371]/30 text-black hover:bg-[#5ef371] transition-all duration-300 cursor-pointer'
                            : 'bg-black/5 text-white'
                        } p-2 text-center ${intervalIndex === intervals.length - 1 ? '' : 'mb-1'}`}
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
          <p>Data: {selectedDates.find((date) => date !== null && date !== undefined)?.toLocaleDateString('pt-BR') || ''}</p>
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
        className={` text-white`}
      />
    </div>
  );
};

export default Calendario;