import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';


function Register() {
   const [openSnackbar, setOpenSnackbar] = useState(false);
   const [snackbarMessage, setSnackbarMessage] = useState("");
   const navigate = useNavigate()
   
   const { register, handleSubmit, setValue, setFocus } = useForm();
   const [address, setAddress] = useState('');
   const [neighborhood, setNeighborhood] = useState('');
   const [city, setCity] = useState('');

   const onSubmit = (data) => {
      console.log(data);
   };

   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [telefone, setTelefone] = useState('');
   const [dataNascimento, setDataNascimento] = useState('');
   const [cpf, setCpf] = useState('');
   const [logradouro, setLogradouro] = useState('');
   const [cep, setCep] = useState('');
   const [bairro, setBairro] = useState('');
   const [cidade, setCidade] = useState('');
   const [uf, setUf] = useState('');
   const [complemento, setComplemento] = useState('');
   const [numero, setNumero] = useState('');
   const [email, setEmail] = useState('');
   const [urlAvatar, setUrlAvatar] = useState('');
   const [senha, setSenha] = useState('');
   const [generoId, setGeneroId] = useState(1);



   const enviarRegistro = async () => {
      try {
         const dados = {
            nome,
            sobrenome,
            telefone,
            dataNascimento,
            cpf,
            endereco: {
               cep,
               logradouro,
               bairro,
               cidade,
               uf,
               complemento,
               numero
            },
            email,
            urlAvatar,
            senha,
            genero: {
               generoId
            }
         }

         

         const response = await axios.post("https://connect-health.up.railway.app/paciente", dados)
         setOpenSnackbar(true);
         setSnackbarMessage("Cadastro Concluído");
         setTimeout(() => {
            navigate("/login")
         }, 2000);
      } catch (error) {
         console.log(error)
      }
   }

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
                  <AiOutlineArrowLeft className="absolute text-azulsite text-3xl top-5 left-5" />
               </Link>
               <div className="flex flex-col mt-4 mb-14 max-md:justify-center ">
                  <h1 className="font-extrabold text-4xl text-azulsite text-center max-md:text-2xl">Registre-se!</h1>
                  <Link to="/">
                     <p className="font-bold mt-3 text-center">É um <span className='text-azulsite'>profissional</span>?</p>
                  </Link>
               </div>
            <div>
               

            <div className='flex  mx-auto h-auto px-5 py-2 rounded shadow-lg justify-center gap-14 bg-[#ebebeb] max-md:block max-md:px-0'>
               {/*Inicio do Forms */}
               <form className=' flex px-3 py-2 rounded'>
                  {/* Formatação do forms */}
                  <div className=' flex flex-col items-center justify-evenly '>
                     <h1 className='text-xl font-bold text-azulsite mb-5'>Informações pessoais</h1>
                     {/* Formatação da div dos inputs */}
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Nome*:</span>
                        <input
                           type="text required"
                           id="Nome"
                           name="Nome"
                           value={nome}
                           onChange={(e) => setNome(e.target.value)}
                           placeholder='Primeiro nome'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     {/* Input Sobrenome */}
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Sobrenome*:</span>
                        <input
                           type="text required"
                           id="Sobrenome"
                           name="Sobrenome"
                           value={sobrenome}
                           onChange={(e) => setSobrenome(e.target.value)}
                           placeholder='Segundo nome'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     {/* Input telefone */}
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Telefone*:</span>
                        <input
                           type="text required"
                           id="Telefone"
                           name="Telefone"
                           maxLength={11}
                           value={telefone}
                           onChange={(e) => setTelefone(e.target.value)}
                           placeholder='11 99999-9999'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     {/* Input Genero */}
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Genero*:</span>
                        <select className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        onChange={(e) => {
                           const selectedGenero = e.target.value;
                           let id = 0;
                           if (selectedGenero === "Masculino") {
                           id = 1;
                           } else if (selectedGenero === "Feminino") {
                           id = 2;
                           }
                           setGeneroId(id);
                           console.log(generoId)
                        }}
                        >
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        
                        </select>
                     
                     </label>

                     {/* Input CPF */}
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                           <span className="mb-1  text-azulsite text-xl">CPF*:</span>
                           <input
                              type="text required"
                              id="CPF"
                              name="CPF"
                              maxLength={14}
                              value={cpf}
                              onChange={(e) => setCpf(e.target.value)}
                              placeholder='000.000.000-00'
                              className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                           />
                        </label>

                        <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Data de nascimento*:</span>
                        <input
                           type="date"
                           id="dataaniversario"
                           name="aniversario"
                           value={dataNascimento}
                           onChange={(e) => setDataNascimento(e.target.value)}
                           className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                           <span className="mb-1  text-azulsite text-xl">E-mail*:</span>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder='seuemail@gmail'
                           className="w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                           
                           />
                        </label>

                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Crie uma senha*:</span>
                        <input
                           type="password"
                           id="Senha"
                           name="Senha"
                           value={senha}
                           onChange={(e) => setSenha(e.target.value)}
                           placeholder='Digite sua senha'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                  </div>
                     </form>
                     <form className=' flex w-auto px-3 py-2 rounded'>
                  <div className=' flex flex-col items-center justify-evenly '>

                     <h1 className='text-xl font-bold text-azulsite mb-5'>Informações Residenciais</h1>
                  
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Endereço*:</span>
                        <input
                           type="text required"
                           id="Endereco"
                           name="Endereco"
                           value={logradouro}
                           onChange={(e) => setLogradouro(e.target.value)}
                           placeholder='Rua connect health'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">CEP*:</span>
                        <input
                           type="text required"
                           id="CEP"
                           name="CEP"
                           maxLength={11}
                           value={cep}
                           onChange={(e) => setCep(e.target.value)}
                           placeholder='00000-000'
                           className=" w-80  border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Cidade* :</span>
                        <input
                           type="text required"
                           id="Cidade"
                           name="Cidade"
                           value={cidade}
                           onChange={(e) => setCidade(e.target.value)}
                           placeholder='São Paulo'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                  
                  <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Bairro*:</span>
                        <input
                           type="text required"
                           id="Logradouro"
                           name="Logradouro"
                           value={bairro}
                           onChange={(e) => setBairro(e.target.value)}
                           placeholder='00000-000'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3 ">
                        <span className="mb-1  text-azulsite text-xl">UF*:</span>
                        <input
                           type="text required"
                           id="UF"
                           name="UF"
                           value={uf}
                           onChange={(e) => setUf(e.target.value)}
                           placeholder='SP'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>

                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1  text-azulsite text-xl">Complemento:</span>
                        <input
                           type="text required"
                           id="Complemento"
                           name="Complemento"
                           value={complemento}
                           onChange={(e) => setComplemento(e.target.value)}
                           placeholder='Ap 20 Bloco 2'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>

                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3 ">
                        <span className="mb-1 text-azulsite text-xl">Número*:</span>
                        <input
                           type="text required"
                           id="numero"
                           name="numero"
                           value={numero}
                           onChange={(e) => setNumero(e.target.value)}
                           placeholder='73'
                           className=" w-80 border border-gray-300 px-3 py-2 rounded max-md:w-full"
                        />
                     </label>
                     <label htmlFor="name" className="flex flex-col text-azulsite text-xl mb-3">
                        <span className="mb-1 text-azulsite text-xl">País* :</span>
                        <input
                           type="text required"
                           id="numero"
                           name="numero"
                           placeholder='Brasil'
                           disabled
                           className=" w-80 border border-gray-300 px-3 py-2 rounded disabled:bg-gradi/20 max-md:w-full"
                        />
                     </label>
                     </div> 
                     </form>
               </div>
                  <div className='flex justify-center'>
                     <input
                     type="submit"
                     value="Enviar"
                     onClick={enviarRegistro}
                     className='mt-4 mb-10 w-40 bg-azulsite border border-azulsite text-white font-bold px-5 py-3 rounded'
                     />
                  </div>

            </div>
               <Snackbar
                 open={openSnackbar}
                 autoHideDuration={3000}
                 message={snackbarMessage}
                 anchorOrigin={{vertical: 'top', horizontal:'center'}}
               >
                  <Alert severity="success"><p className="text-center text-lg">Cadastro concluído com sucesso</p></Alert>
               </Snackbar>
      </div>
   );
}

export default Register;