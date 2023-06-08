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
         <div className=' w-1/2 h-screen  '>
           <Link to="/">
            <AiOutlineArrowLeft className="absolute text-azulsite text-5xl top-3 left-3" />
           </Link>
           <div className="flex justify-center mt-4 mb-5">
           <h1 className="font-bold text-4xl text-azulsite">Registre-se !</h1>
           </div>
            <form className=' flex  justify-center align-center w-full h-screen bg-white'>
               
               <input className='border-solid border-2 border-gradi/30 rounded-3xl w-30 h-10 pl-4 pr-4 required ' 
               type="text" 
               placeholder='Ex:João da Silva Vieira' />


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