import React from 'react'
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Click from '../../Components/miniComponents/Click';
import Horario from '../../Components/miniComponents/Horario';


const FiltrosDetails = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#94E127',
            },
            
        },
    })


  return (
    <div className='flex flex-col'>
        <div>
            <h2 className='text-nutri uppercase text-center text-xl font-bold mt-3'>Filtros</h2>
        </div>

        <div className='flex flex-col items-center mt-8'>
            <h2 className='text-center text-black text-lg font-semibold '>Já conhece o profissional que deseja?</h2>
            <input type="text" placeholder='Nome do profissional' className='w-96 py-2 rounded-3xl pl-5 placeholder:text-[#333] focus:border outline-none focus:border-nutri text-black' />
        </div>

        <div className='grid grid-cols-2 mx-[2%] mt-6'>
            <div>
                <h4 className='text-nutri text-center  text-lg '>Especialidades</h4>

                <div className='flex flex-wrap gap-2 justify-center mt-3'>
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Ansiedade" 
                    />
                    <Click
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Bournout" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Borderline" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Conflitos Amorosos" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Família" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Déficit de Atenção" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Depressão" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Estresse" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Desenvolvimento Pessoal" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Autoconhececimento" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Compulsões" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Morte e luto" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Fobias" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Drogas" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Medos" 
                    />
                   <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Obesidade" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Sexualidade" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Insônia" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Sindrome do Pânico" 
                    />
                   <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="Autoestima" 
                    />
                    <Click 
                        bg="bg-nutri"
                        textClass="text-white"

                        text="TOC - Transtorno Obssesivo Compulsivo" 
                    />
                </div>

                <div className='flex flex-col items-center'>
                    <h4 className='text-[#000] text-center mt-4'> Para quem é a sua consulta?</h4>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >    
                            <ThemeProvider theme={theme}>
                                <FormControlLabel className='text-[#000]' value="adulto" control={<Radio />} label="Adulto"  />
                                <FormControlLabel className='text-[#000]' value="crianca" color="primary" control={<Radio />} label="Criança" />
                                <FormControlLabel className='text-[#000]' value="idoso" color="primary" control={<Radio />} label="Idoso" />
                                <FormControlLabel className='text-[#000]' value="pcd" color="primary" control={<Radio />} label="PCD's" />

                            </ThemeProvider>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h4 className='text-nutri text-center text-lg  '>Horário para agendamento</h4>
                <p className='text-center text-[#000] text-sm'>Selecione o dia que deseja:</p>
                <input type="date" name="" id="" className='text-[#000] rounded-3xl px-5 mt-2'/>

                <div className='grid grid-cols-5 gap-2 mt-6'>
                    <Horario 
                        hora="06:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="06:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="07:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="07:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                   <Horario 
                        hora="08:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="08:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="09:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="09:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="10:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="10:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="11:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="11:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                   <Horario 
                        hora="12:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="12:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />  
                    <Horario 
                        hora="13:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="13:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="14:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="14:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                   <Horario 
                        hora="15:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="15:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="16:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="16:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="17:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="17:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="18:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                   <Horario 
                        hora="18:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="19:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="19:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="20:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="20:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="21:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="21:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                   <Horario 
                        hora="22:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="22:30"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                    <Horario 
                        hora="23:00"

                        bg="bg-nutri"
                        textClass='text-white'
                    />
                </div>
            </div>

        </div>
            
        <button className='bg-nutri text-white px-10 py-2 rounded-3xl m-auto mt-6 hover:border hover:border-[#00ff9d] hover:scale-105 box-content transition duration-300 active:scale-90'>Buscar</button>
    </div>
  )
}

export default FiltrosDetails