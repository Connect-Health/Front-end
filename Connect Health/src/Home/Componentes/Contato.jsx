import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';

import DesenhoContato from '../../../assets/desenhocontato.svg';
import WaveFooter from '../../../assets/wavefooterhome.svg';




function Contato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || telefone === '' || message === '') {
      setSnackbarMessage('Preencha todos os campos');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs
      .send('service_h53iepl', 'template_dxedpez', templateParams, 'Zd1MuvK-0w_AWubLF')
      .then(
        (response) => {
          setSnackbarMessage('Mensagem enviada');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setEmail('');
          setName('');
          setTelefone('');
          setMessage('');
        },
        (error) => {
          setSnackbarMessage('Mensagem não enviada, tente novamente');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        }
      );
  }

  return (
    <div className="max-md:mt-[1100px]">
      <div className="w-[100%]">
        <h1 className="text-center text-3xl font-bold text-[#5855F2] dark:text-white max-md:text-xl">
          Entre em contato conosco!
        </h1>
      </div>

      <div className="w-[90%] m-auto mt-10 flex gap-40 items-center mb-24 max-md:w-[95%] max-md:justify-center max-md:flex-col max-md:gap-14">
        <div className="flex flex-col h-auto pb-4 bg-[#5855F2] bg-opacity-80 w-[70%] pl-10 pt-10 rounded-2xl shadow-lg max-md:w-[100%]">
          <div>
            <h2 className="font-bold text-2xl text-white max-md:text-xl">Contate-nos</h2>
            <p className="text-white max-md:text-sm">Mande suas dúvidas, portfólios e ideias.</p>
          </div>

          <div className="flex flex-col gap-10 mt-10 max-md:w-[100%]">
            <form className="flex flex-col gap-10" onSubmit={sendEmail}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                className="w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none max-md:w-[80%]"
                type="email"
                maxLength={60}
              />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nome"
                className="w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none max-md:w-[80%]"
                type="text"
              />
              <input
                onChange={(e) => setTelefone(e.target.value)}
                value={telefone}
                placeholder="Telefone (55)"
                className="w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white placeholder:shadow-none focus:outline-none max-md:w-[80%]"
                type="tel"
                maxLength={11}
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Mensagem"
                maxLength={255}
                className="bg-[#F3F9FF] py-3 px-4 opacity-80 w-[70%] h-40 rounded-sm placeholder:text-black text-black text max-md:w-[80%]"
                name=""
                id=""
                cols="40"
                rows="10"
              ></textarea>
              <button className="bg-[#5855F2] text-white shadow-xl w-[35%] rounded-sm p-2 hover:bg-white hover:text-[#5855F2] transition-all duration-300">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div>
          <img className="w-[100%]" src={DesenhoContato} alt="" />
        </div>
      </div>

      <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contato;