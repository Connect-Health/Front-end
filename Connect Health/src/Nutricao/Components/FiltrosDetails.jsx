import React from 'react'
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Click from './click';
import Horario from './Horario';


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
            <h2 className='text-center text-[#000] text-lg font-semibold '>Já conhece o profissional que deseja?</h2>
            <input type="text" placeholder='Nome do profissional' className='w-96 py-2 rounded-3xl pl-5 placeholder:text-[#333] focus:border outline-none focus:border-nutri text-[#000]' />
        </div>

        <div className='grid grid-cols-2 mx-[2%] mt-6'>
            <div>
                <h4 className='text-nutri text-center  text-lg '>Especialidades</h4>

                <div className='flex flex-wrap gap-2 justify-center mt-3'>
                    <Click text="Ansiedade" />
                    <Click text="Bournout" />
                    <Click text="Borderline" />
                    <Click text="Conflitos Amorosos" />
                    <Click text="Família" />
                    <Click text="Déficit de Atenção" />
                    <Click text="Depressão" />
                    <Click text="Estresse" />
                    <Click text="Desenvolvimento Pessoal" />
                    <Click text="Autoconhecimento" />
                    <Click text="Compulsões" />
                    <Click text="Morte e luto" />
                    <Click text="Fobias" />
                    <Click text="Drogas" />
                    <Click text="Medos" />
                    <Click text="Obesidade" />
                    <Click text="Sexualidade" />
                    <Click text="Insônia" />
                    <Click text="Sindrome do Pânico" />
                    <Click text="Autoestima" />
                    <Click text="TOC - Transtorno Obsessivo Compulsivo" />
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
                    <Horario hora="06:00" />
                    <Horario hora="06:30" />
                    <Horario hora="07:00" />
                    <Horario hora="07:30" />
                    <Horario hora="08:00" />
                    <Horario hora="08:30" />
                    <Horario hora="09:00" />
                    <Horario hora="09:30" />
                    <Horario hora="10:00" />
                    <Horario hora="10:30" />
                    <Horario hora="11:00" />
                    <Horario hora="11:30" />
                    <Horario hora="12:00" />
                    <Horario hora="12:30" />
                    <Horario hora="13:00" />
                    <Horario hora="13:30" />
                    <Horario hora="14:00" />
                    <Horario hora="14:30" />
                    <Horario hora="15:00" />
                    <Horario hora="15:30" />
                    <Horario hora="16:00" />
                    <Horario hora="16:30" />
                    <Horario hora="17:00" />
                    <Horario hora="17:30" />
                    <Horario hora="18:00" />
                    <Horario hora="18:30" />
                    <Horario hora="19:00" />
                    <Horario hora="19:30" />
                    <Horario hora="20:00" />
                    <Horario hora="20:30" />
                    <Horario hora="21:00" />
                    <Horario hora="21:30" />
                    <Horario hora="22:00" />
                    <Horario hora="22:30" />
                    <Horario hora="23:00" />
                </div>
            </div>

        </div>
            
        <button className='bg-nutri text-white px-10 py-2 rounded-3xl m-auto mt-6 hover:border hover:border-[#00ff9d] hover:scale-105 box-content'>Buscar</button>
    </div>
  )
}

export default FiltrosDetails