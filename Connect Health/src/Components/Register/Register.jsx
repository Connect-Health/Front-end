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
      <div className=''>
         <div className='flex flex-col items-center w-screen h-screen'>
            <Link to="/">
               <AiOutlineArrowLeft className="absolute text-azulsite text-5xl top-3 left-3" />
            </Link>
            <div className="flex flex-col mt-4 mb-5">
               <h1 className="font-extrabold text-4xl text-azulsite text-center">Registre-se!</h1>
               <Link to="/">
                  <p className="font-bold mt-3 text-center">É um <span className='text-azulsite'>profissional</span>?</p>
               </Link>
            </div>
            <form className=' flex flex-col w-2/3 bg-azulsite border border-white px-3 py-2 rounded'>

               <div className=' flex items-center justify-evenly w-full'>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Nome*:</span>
                     <input
                        type="text required"
                        id="Nome"
                        name="Nome"
                        placeholder='Primeiro nome'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Sobrenome*:</span>
                     <input
                        type="text required"
                        id="Sobrenome"
                        name="Sobrenome"
                        placeholder='Segundo nome'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Telefone*:</span>
                     <input
                        type="text required"
                        id="Telefone"
                        name="Telefone"
                        placeholder='11 99999-9999'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>

               <div className=' flex items-center justify-evenly h-20'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Genero*:</span>
                     <select className="w-60 border border-gray-300 px-3 py-2 rounded">
                      <option value="#">Selecione</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      
                     </select>
                  </label>

                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                        <span className="mb-1 text-white text-xl">CPF*:</span>
                        <input
                           type="text required"
                           id="CPF"
                           name="CPF"
                           placeholder='000.000.000-00'
                           className=" w-60 border border-gray-300 px-3 py-2 rounded"
                        />
                     </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Data de nascimento*:</span>
                     <input
                        type="date"
                        id="dataaniversario"
                        name="aniversario"
                        className="w-60 border border-gray-300 px-3 py-2 rounded required:"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-evenly h-20'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Endereço*:</span>
                     <input
                        type="text required"
                        id="Endereco"
                        name="Endereco"
                        placeholder='Rua connect health'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">CEP*:</span>
                     <input
                        type="text required"
                        id="CEP"
                        name="CEP"
                        placeholder='00000-000'
                        className=" w-60  border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Estado*:</span>
                     <input
                        type="text required"
                        id="Estado"
                        name="Estado"
                        placeholder='São Paulo'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-evenly h-20'>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Bairro*:</span>
                     <input
                        type="text required"
                        id="Logradouro"
                        name="Logradouro"
                        placeholder='00000-000'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">UF*:</span>
                     <input
                        type="text required"
                        id="UF"
                        name="UF"
                        placeholder='SP'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Complemento:</span>
                     <input
                        type="text required"
                        id="Complemento"
                        name="Complemento"
                        placeholder='Ap 20 Bloco 2'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
               <div className='  flex items-center justify-evenly h-20'>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Número <span className='text-nutri'>*</span>:</span>
                     <input
                        type="text required"
                        id="numero"
                        name="numero"
                        placeholder='73'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>

                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl">
                        <span className="mb-1 text-white text-xl">E-mail*:</span>
                        <input
                           type="e-mail required"
                           id="email"
                           name="email"
                           placeholder='seuemail@gmail'
                        className="w-60 border border-gray-300 px-3 py-2 rounded"
                        
                        />
                     </label>

                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-white text-xl">Crie uma senha <span className='text-nutri'>*</span>:</span>
                     <input
                        type="password"
                        id="Senha"
                        name="Senha"
                        placeholder='Digite sua senha'
                        className=" w-60 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  </div>
                  <div className='flex justify-center'>
                  <input
                  type="submit"
                  value="Enviar"
                  className='mt-4 w-40 bg-white border border-azulsite text-azulsite px-3 py-2 rounded'
                  />
                  </div>

            </form>

         </div>
      </div>
   );
}

export default Register;