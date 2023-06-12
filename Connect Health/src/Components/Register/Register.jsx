import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { BsGoogle } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import lockericon from '../../../assets/lockericon.png';
import mailicon from '../../../assets/mailicon.png';
import { useForm } from 'react-hook-form';
import Bgregistro from "../../../assets/bgregistro.png";

function Register() {
   const { register, handleSubmit, setValue, setFocus } = useForm();
   const [address, setAddress] = useState('');
   const [neighborhood, setNeighborhood] = useState('');
   const [city, setCity] = useState('');
   const [uf, setUf] = useState('');

   const onSubmit = (data) => {
      console.log(data);
   };

   const checkCEP = (e) => {
      const cep = e.target.value.replace(/\D/g, '');
      console.log(cep);
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setAddress(data.logradouro);
            setNeighborhood(data.bairro);
            setCity(data.localidade);
            setUf(data.uf);
            setFocus('addressNumber');
         });
   };

   return (
      <div className=' flex bg-bgregister bg-cover'>
         <div className=' w-1/2 h-screen'>
            <Link to="/">
               <AiOutlineArrowLeft className="absolute text-azulsite text-5xl top-3 left-3" />
            </Link>
            <div className="flex flex-col mt-4 mb-5">
               <h1 className="font-bold text-4xl text-azulsite text-center">Registre-se!</h1>
               <Link to="/">
                  <p className="font-bold mt-3 text-center">É um <span className='text-azulsite'>profissional?</span></p>
               </Link>
            </div>
            <form className=' flex flex-col w-{"100%}'>
               <div className=' flex items-center justify-around w-full'>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Nome Completo:</span>
                     <input
                        type="text required"
                        id="name"
                        name="name"
                        placeholder='Seu nome completo'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl">
                     <span className="mb-1 text-azulsite text-xl">E-mail:</span>
                     <input
                        type="e-mail required"
                        id="email"
                        name="email"
                        placeholder='seuemail@gmail.com'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
               <div className=' flex items-center justify-around h-28'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Número de celular:</span>
                     <input 
                        type="text required"
                        id="telefone"
                        name="numero"
                        placeholder='11-99999-9999'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Data de nascimento:</span>
                     <input
                        type="date"
                        id="dataaniversario"
                        name="aniversario"
                        placeholder='11-99999-9999'
                        className="w- border border-gray-300 px-3 py-2 rounded required:"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-around h-20'>
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                        <span className="mb-1 text-azulsite text-xl">CPF:</span>
                        <input
                           type="text required"
                           id="CPF"
                           name="CPF"
                           placeholder='000.000.000-00'
                           className="border border-gray-300 px-3 py-2 rounded"
                        />
                     </label>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">CEP:</span>
                     <input
                        type="text required"
                        id="CEP"
                        name="CEP"
                        placeholder='00000-000'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-around h-20'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Estado:</span>
                     <input
                        type="text required"
                        id="Estado"
                        name="Estado"
                        placeholder='São Paulo'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Endereço:</span>
                     <input
                        type="text required"
                        id="Endereco"
                        name="Endereco"
                        placeholder='Rua connect health'
                        className="border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-around h-20'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Logradouro:</span>
                     <input
                        type="text required"
                        id="Logradouro"
                        name="Logradouro"
                        placeholder='00000-000'
                        className=" w-60- border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Endereço:</span>
                     <input
                        type="text required"
                        id="CPF"
                        name="CPF"
                        placeholder='000.000.000-00'
                        className=" w-72 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
            </form>

         </div>
         <div className=" flex w-1/2 h-screen  bg-cover bg-center items-center">
            <img src={Bgregistro} alt="" className="absolute -z-10 w-1/2" />
            <div className="flex flex-col ml-20">
               <h1 className="font-bold text-4xl text-white text-right">Connect Health</h1>
               <h2 className="text-2xl text-white mt-2">Mantenha-se conectado com sua saúde!</h2>

            </div>
         </div>
      </div>
   );
}

export default Register;