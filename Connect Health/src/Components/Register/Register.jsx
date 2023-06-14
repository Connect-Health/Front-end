import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


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
               <Link to="/">
                  <AiOutlineArrowLeft className="absolute text-azulsite text-5xl top-3 left-3" />
               </Link>
               <div className="flex flex-col mt-4 mb-5">
                  <h1 className="font-extrabold text-4xl text-azulsite text-center">Registre-se!</h1>
                  <Link to="/">
                     <p className="font-bold mt-3 text-center">É um <span className='text-azulsite'>profissional</span>?</p>
                  </Link>
               </div>
         
         <div className='flex justify-center justify-around w-auto h-auto'>
            {/*Inicio do Forms */}
            <form className=' flex w-auto px-3 py-2 rounded'>
               {/* Formatação do forms */}
               <div className=' flex flex-col items-center justify-evenly '>
                  <h1 className='text-xl font-bold text-azulsite'>Informações pessoais</h1>
                  {/* Formatação da div dos inputs */}
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Nome*:</span>
                     <input
                        type="text required"
                        id="Nome"
                        name="Nome"
                        placeholder='Primeiro nome'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  {/* Input Sobrenome */}
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Sobrenome*:</span>
                     <input
                        type="text required"
                        id="Sobrenome"
                        name="Sobrenome"
                        placeholder='Segundo nome'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  {/* Input telefone */}
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Telefone*:</span>
                     <input
                        type="text required"
                        id="Telefone"
                        name="Telefone"
                        placeholder='11 99999-9999'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  {/* Input Genero */}
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Genero*:</span>
                     <select className="w-80 border border-gray-300 px-3 py-2 rounded">
                      <option value="Masculino">Masculino</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      
                     </select>
                  </label>
                  {/* Input CPF */}
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                        <span className="mb-1  text-azulsite text-xl">CPF*:</span>
                        <input
                           type="text required"
                           id="CPF"
                           name="CPF"
                           placeholder='000.000.000-00'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded"
                        />
                     </label>

                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Data de nascimento*:</span>
                     <input
                        type="date"
                        id="dataaniversario"
                        name="aniversario"
                        className="w-80 border border-gray-300 px-3 py-2 rounded required:"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl">
                        <span className="mb-1  text-azulsite text-xl">E-mail*:</span>
                        <input
                           type="e-mail required"
                           id="email"
                           name="email"
                           placeholder='seuemail@gmail'
                        className="w-80 border border-gray-300 px-3 py-2 rounded"
                        
                        />
                     </label>

                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Crie uma senha*:</span>
                     <input
                        type="password"
                        id="Senha"
                        name="Senha"
                        placeholder='Digite sua senha'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               </div>
                  </form>
                  <form className=' flex w-auto px-3 py-2 rounded'>
               <div className=' flex flex-col items-center justify-evenly '>

                  <h1 className='text-xl font-bold text-azulsite'>Informações Residenciais</h1>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Endereço*:</span>
                     <input
                        type="text required"
                        id="Endereco"
                        name="Endereco"
                        placeholder='Rua connect health'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Endereço*:</span>
                     <input
                        type="text required"
                        id="Endereco"
                        name="Endereco"
                        placeholder='Rua connect health'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">CEP*:</span>
                     <input
                        type="text required"
                        id="CEP"
                        name="CEP"
                        placeholder='00000-000'
                        className=" w-80  border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Estado*:</span>
                     <input
                        type="text required"
                        id="Estado"
                        name="Estado"
                        placeholder='São Paulo'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
               
               <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Bairro*:</span>
                     <input
                        type="text required"
                        id="Logradouro"
                        name="Logradouro"
                        placeholder='00000-000'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">UF*:</span>
                     <input
                        type="text required"
                        id="UF"
                        name="UF"
                        placeholder='SP'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>

                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1  text-azulsite text-xl">Complemento:</span>
                     <input
                        type="text required"
                        id="Complemento"
                        name="Complemento"
                        placeholder='Ap 20 Bloco 2'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>

                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl ">
                     <span className="mb-1 text-azulsite text-xl">Número*:</span>
                     <input
                        type="text required"
                        id="numero"
                        name="numero"
                        placeholder='73'
                        className=" w-80 border border-gray-300 px-3 py-2 rounded"
                     />
                  </label>
                  </div> 
                  </form>
            </div>
               <div className='flex justify-center'>
                  <input
                  type="submit"
                  value="Enviar"
                  className='mt-4 w-40 bg-azulsite border border-azulsite text-white font-bold px-5 py-3 rounded'
                  />
                  </div>
         
      </div>
   );
}

export default Register;