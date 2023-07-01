import React, { useContext, useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { AuthContext } from "../AutoContext/AuthContext";
import {
  Backdrop,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Notificacao = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [anchorel, setAnchorel] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorel(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorel(null);
  };

  async function fetchConsultas() {
    try {
      const response = await axios.get(
        `https://connect-health.up.railway.app/calendario/paciente/${user.pacienteId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user && user.pacienteId) {
      fetchConsultas();
    }
  }, [user]);

  const handleChamada = (profissionalId) => {
    navigate(`/chamada/${profissionalId}`);
  };

  const isConsultaFutura = (dataConsulta, horarioConsulta) => {
    const dataHoraConsulta = new Date(`${dataConsulta}T${horarioConsulta}`);
    const dataHoraAtual = new Date();

    return dataHoraConsulta > dataHoraAtual;
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatTime(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  }

  function padZero(value) {
    return value.toString().padStart(2, "0");
  }

  return (
    <div>
      {user && user.pacienteId && (
        <button onClick={handleMenuOpen}>
          <IoMdNotifications className="text-3xl text-azulsite/50 hover:scale-110 transition-all duration-150" />
        </button>
      )}
      <Dialog
        anchorel={anchorel}
        open={Boolean(anchorel)}
        onClose={handleMenuClose}
      >
        <DialogTitle className="bg-azulsite/30">Próximas Consultas</DialogTitle>

        <DialogContent className="bg-azulsite/30 max-md:w-full">
          {user && user.pacienteId && data.length > 0 ? (
            data
              .filter((consultas) =>
                isConsultaFutura(consultas.data, consultas.horario)
              )
              .map((consultas) => (
                <div className="mx-3 mb-3 py-2 px-6 flex w-96 justify-between items-center bg-white rounded-md max-md:w-60 max-md:flex-col max-md:justify-center max-md:gap-5">
                  <div className="">
                    <h1>
                      {consultas.profissional.nome} -{" "}
                      {consultas.profissional.areaAtuacao.nome}
                    </h1>
                    <p>Dia: {formatDate(consultas.data)}</p>
                    <p>Às: {formatTime(consultas.horario)}</p>
                  </div>

                  <div className="mr-4">
                    {consultas.profissional.areaAtuacao.areaId === 1 && (
                      <button
                        onClick={() =>
                          handleChamada(consultas.profissional.profissionalId)
                        }
                        className="bg-psi/30 py-1 px-4 rounded-md"
                      >
                        Entrar
                      </button>
                    )}
                    {consultas.profissional.areaAtuacao.areaId === 2 && (
                      <button
                        onClick={() =>
                          handleChamada(consultas.profissional.profissionalId)
                        }
                        className="bg-nutri/30 py-1 px-4 rounded-md"
                      >
                        Entrar
                      </button>
                    )}
                  </div>
                </div>
              ))
          ) : (
            <div className="bg-white rounded-md p-3 w-80">
              <p className="text-center">Não tem consultas disponíveis</p>

              <p className="text-center mt-5 mb-2">Agende a sua agora com:</p>

              <div className="flex justify-between bg-white">
                <Link
                  to="/psicologia"
                  className="bg-psi/50 py-1 px-3 rounded-md w-32 text-center ml-3"
                >
                  Psicólogos
                </Link>
                <Link
                  to="/nutricao"
                  className="bg-nutri/50 py-1 px-3 rounded-md w-32 text-center mr-3"
                >
                  Nutricionistas
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notificacao;
