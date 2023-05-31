import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { BsGoogle } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import lockericon from '../../../assets/lockericon.png';
import mailicon from '../../../assets/mailicon.png';
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
      <div className='bg-bgregister bg-cover'>
         <div className=''>
            <Link to='/'>
               <AiOutlineArrowLeft className='absolute text-white text-5xl top-2 left-3' />
            </Link>
         </div>

         <div className='bg-azulsite h-16 flex items-center justify-center'>
            <h1 className='text-3xl text-white'>Faça seu cadastro!</h1>
         </div>

         <div className='bg-[#f5f5f5] w-[65%] m-auto h-[86vh] rounded-sm mt-20 shadow-md'>
            <div className='flex  gap-14 justify-center p-5'>
               <p className='absolute left-[23%] top-[28%] text-sm text-[#5855F2]'>Nome*</p>
               <input
                  className='rounded-sm w-[42%] h-16 pl-4 pt-5 outline-none border-[1px] border-azulsite'
                  required
                  type='text'
                  placeholder='Nome social ou de registro'
               />
               <p className='absolute left-[53.2%] top-[28%] text-sm text-[#5855F2]'>Sobrenome*</p>
               <input
                  className='rounded-sm w-[42%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'
                  required
                  type='text'
                  placeholder='Nome social ou de registro'
               />
            </div>
            <div className='flex gap-14 justify-center p-5'>
               <p className='absolute left-[23%] top-[43%] text-sm text-[#5855F2]'>Data de nascimento*</p>
               <input
                  className='rounded-sm w-[42%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'
                  type='text'
                  placeholder='DD/MM/AAAA'
               />
               <p className='absolute left-[53.2%] top-[43%] text-sm text-[#5855F2]'>CPF*</p>
               <input
                  className='rounded-sm w-[42%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'
                  type='text'
                  placeholder='999.999.999-99'
               />
            </div>
            <div className='flex gap-14 justify-center p-5'>
               <p className='absolute left-[23%] top-[58%] text-sm text-[#5855F2]'>Email*</p>
               <input
                  className='rounded-sm w-[64%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'
                  type='text'
                  placeholder='Digite seu email'
               />
               <p className='absolute left-[67%] top-[58%] text-sm text-[#5855F2]'>Gênero*</p>

               <select className='w-[20%] pt-5 pl-4 outline-none border-[1px] border-[#c3c3c3]' label=''>
                  <option className=''>Feminino</option>
                  <option>Masculino</option>
               </select>
            </div>
            <div className='w-[86%] m-auto '>
               <div>
                  <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-12'>
                        <p className='absolute left-[23.2%] top-[71%] text-sm text-[#5855F2]'>CEP*</p>
                           <input className='rounded-sm w-[40%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'
                              type='text'  placeholder='Digite seu CEP' {...register('cep')} onBlur={checkCEP} />
                        <p className='absolute left-[45.8%] top-[71%] text-sm text-[#5855F2]'>Sua Rua*</p>
                           <input className='rounded-sm w-[70%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]' placeholder='Rua' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                     <br />
                     <div className='flex gap-12 justify-center '>
                        <p className='absolute left-[23.2%] top-[84%] text-sm text-[#5855F2]'>Número*</p>
                        <input className='w-[26%] pt-5 pl-4 outline-none border-[1px] border-[#c3c3c3]' type='text' {...register('addressNumber')} />
                        <p className='absolute left-[41%] top-[84%] text-sm text-[#5855F2]'>Seu bairro*</p>
                        <input className='rounded-sm w-[68%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]' type='text' value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                     </div>
                     

                     <br />

                     <div className='flex gap-14'>
                        <p className='absolute left-[23.2%] top-[97%] text-sm text-[#5855F2]'>Cidade*</p>
                        <input className='rounded-sm w-[85%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]'placeholder='Cidade' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                        <p className='absolute left-[61.8%] top-[97%] text-sm text-[#5855F2]'>Seu bairro*</p>
                        <input className='rounded-sm w-[42%] h-16 pl-4 pt-5 outline-none border-[1px] border-[#c3c3c3]' placeholder='Estado' type='text' value={uf} onChange={(e) => setUf(e.target.value)} />

                     </div>
                     
                  </form>
                  
               </div>
            </div>

         </div>
      </div>
   );
}

export default Register;