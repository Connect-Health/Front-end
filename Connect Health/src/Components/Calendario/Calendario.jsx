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
  const [disabledHours, setDisabledHours] = useState([]);
  const [hourAvailability, setHourAvailability] = useState([]);
  const [apiAvailability, setApiAvailability] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCalendario = async () => {
      try {
        const response = await axios.get(
          `https://connect-health.up.railway.app/calendario/profissional/${id}`
        );

        const calendario = response.data;
        const availableHours = calendario.map(item => ({
          data: new Date(item.data),
          horario: item.horario,
          disponivel: item.disponivel
        }));
        setApiAvailability(availableHours);
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
    setSelectedDates([]);
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

    const updatedDisabledHours = [
      ...disabledHours,
      { date: selectedDates.find((date) => date !== null), hour: selectedHour },
    ];
    setDisabledHours(updatedDisabledHours);

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
      available:
        currentDayOfWeek !== 0 &&
        currentDayOfWeek !== 6 &&
        apiAvailability.some((apiItem) =>
          isSameDate(apiItem.data, date) && apiItem.horario === interval.time && apiItem.disponivel
        ),
    }));

    const hourIntervals = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return { date, intervals: updatedIntervals };
    });

    return hourIntervals;
  }

  function isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  return (
    <div>
      <h1>Calendário</h1>
      <div className="flex gap-2 bg-gradi/10 shadow-md py-5 px-2 w-fit">
        {hourIntervals.map((day, index) => {
          const { date, intervals } = day;
          return (
            <div key={index}>
              <div className="w-14 py-1 bg-azulsite/50 rounded text-center text-white">
                <div className="leading-tight  ">
                  {date.toLocaleDateString("pt-BR", { weekday: "short" })}
                </div>
                <div className="leading-none">{date.getDate()}</div>
              </div>
              <div className="available-hours">
                <ul>
                  {intervals.map((interval, intervalIndex) => (
                    <li
                      key={interval.time}
                      className={`${
                        !interval.available
                          ? "bg-[#5ef371]/30 text-black hover:bg-[#5ef371] cursor-not-allowed"
                          : "bg-black/20 text-white cursor-pointer"
                      } p-2 text-center ${
                        intervalIndex === intervals.length - 1 ? "" : "mb-1"
                      }`}
                      onClick={() => {
                        setSelectedDates((prevDates) => {
                          const updatedDates = [...prevDates];
                          updatedDates[index] = date;
                          return updatedDates;
                        });
                        setSelectedHour(interval.time);
                        setShowConfirmation(true);
                      }}
                    >
                      {interval.time}
                    </li>
                  ))}
                </ul>
              </div>
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
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Consulta agendada com sucesso!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </div>
  );
};

export default Calendario;