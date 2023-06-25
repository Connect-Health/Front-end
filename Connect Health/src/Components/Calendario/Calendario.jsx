import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { AuthContext } from "../../AutoContext/AuthContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Calendario = () => {
  const { id } = useParams();

  const [selectedDates, setSelectedDates] = useState(
    Array.from({ length: 7 }, () => null)
  );
  const [selectedHour, setSelectedHour] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [hourIntervals, setHourIntervals] = useState(createHourIntervals());
  const [hourAvailability, setHourAvailability] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCalendario = async () => {
      try {
        const response = await axios.get(
          `https://connect-health.up.railway.app/calendario/profissional/${id}`
        );

        const calendario = response.data;

        setHourAvailability(calendario);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCalendario();
  }, []);

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

  const handleConfirmAppointment = async () => {
    setShowConfirmation(false);
    setShowSnackbar(true);

    try {
      const calendario = {
        data: selectedDates
          .find((date) => date !== null)
          ?.toLocaleDateString("pt-BR")
          .split("/")
          .reverse()
          .join("-"),
        horario: selectedHour + ":00",
        reservado: true,
        profissional: {
          profissionalId: parseInt(id),
        },
        paciente: {
          pacienteId: user.pacienteId,
        },
      };

      const response = await axios.post(
        "https://connect-health.up.railway.app/calendario",
        calendario
      );
    } catch (error) {
      console.log(error);
    }

    const updatedIntervals = hourIntervals.map((day) => {
      const { date, intervals } = day;
      if (
        date.toDateString() ===
        selectedDates.find((date) => date !== null)?.toDateString()
      ) {
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
                  selectedDates[index] &&
                  selectedDates[index].toDateString() === date.toDateString()
                    ? "bg-azulsite/70 text-white"
                    : "bg-azulsite/50"
                } rounded w-14 py-1`}
              >
                <div className="leading-tight">
                  {date.toLocaleDateString("pt-BR", { weekday: "short" })}
                </div>
                <div className="leading-none">{date.getDate()}</div>
              </button>

              {selectedDates[index] &&
                selectedDates[index].toDateString() === date.toDateString() && (
                  <div
                    className={`available-hours transition-all duration-500 ${
                      selectedDates[index] ? "h-auto" : "h-0"
                    }`}
                  >
                    <ul>
                      {intervals.map((interval, intervalIndex) => {
                        const isUnavailable = hourAvailability.some((hour) => {
                          const selectedDate = selectedDates.find(
                            (date) => date !== null
                          );
                          return (
                            selectedDate
                              .toLocaleDateString("pt-BR")
                              .split("/")
                              .reverse()
                              .join("-") === hour.data &&
                            hour.reservado &&
                            hour.horario === interval.time + ":00"
                          );
                        });

                        if (isUnavailable) {
                          // Horário já foi marcado, renderize algo indicando que não está disponível
                          return (
                            <li
                              key={intervalIndex}
                              className="bg-gray-300 text-gray-500 cursor-not-allowed p-2 text-center my-1"
                            >
                              {interval.time}
                            </li>
                          );
                        } else {
                          // Horário está disponível, renderize normalmente
                          return (
                            <li
                              key={intervalIndex}
                              onClick={() => handleHourClick(interval.time)}
                              className="bg-[#5ef371]/30 text-black hover:bg-[#5ef371] transition-all duration-300 cursor-pointer p-2 text-center my-1"
                            >
                              {interval.time}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                )}
            </div>
          );
        })}
      </div>

      <Dialog
        open={showConfirmation}
        onClose={handleConfirmationClose}
        className=""
      >
        <DialogTitle className=" text-center">Confirmar Consulta</DialogTitle>
        <DialogContent className=" text-center">
          <p>
            Data:{" "}
            {selectedDates
              .find((date) => date !== null && date !== undefined)
              ?.toLocaleDateString("pt-BR") || ""}
          </p>
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
