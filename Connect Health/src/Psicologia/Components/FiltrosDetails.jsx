import React from 'react'
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Click from '../../Components/miniComponents/Click';
import Horario from '../Components/Horario';

const especialidades = 
    [
        'Ansiedade',
        'Bornout',
        'Borderline', 
        'Conflitos Amorosos',
        'Família',
        'Déficit de Atenção',
        'Depressão',
        'Estresse',
        'Desenvolvimento Pessoal',
        'Autoconhecimento',
        'Compulsões',
        'Morte e Luto',
        'Fobias',
        'Drogas',
        'Medos',
        'Obesidade',
        'Sexualidade',
        'Insônia',
        'Sindrome do Pânico',
        'Autoestima',
        'TOC - Transtorno Obssesivo Compulsivo'
    ]

    const horarios = 
    [
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
    ]

const FiltrosDetails = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#9A54E1',
            },
            
        },
    })


  return (
    <div className='flex flex-col'>
        <div>
            <h2 className='text-psi uppercase text-center text-xl font-bold mt-3'>Filtros</h2>
        </div>

        <div className='flex flex-col items-center mt-8'>
            <h2 className='text-center text-black text-lg font-semibold '>Já conhece o profissional que deseja?</h2>
            <input type="text" placeholder='Nome do profissional' className='w-96 py-2 rounded-3xl pl-5 placeholder:text-[#333] focus:border outline-none focus:border-psi text-black' />
        </div>

        <div className='grid grid-cols-2 mx-[2%] mt-6'>
            <div>
                <h4 className='text-psi text-center  text-lg '>Especialidades</h4>

                <div className='flex flex-wrap gap-2 justify-center mt-3'>
                    {especialidades.map((especialidade, idx) => (
                        <Click
                            key={idx}
                            bg="bg-psi"
                            textClass="text-white"
                            text={especialidade}
                        />
                    ))}
                </div>

                <div className='flex flex-col items-center'>
                    <h4 className='text-black text-center mt-4'> Para quem é a sua consulta?</h4>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >    
                            <ThemeProvider theme={theme}>
                                <FormControlLabel className='text-black' value="adulto" control={<Radio />} label="Adulto"  />
                                <FormControlLabel className='text-black' value="crianca" color="primary" control={<Radio />} label="Criança" />
                                <FormControlLabel className='text-black' value="idoso" color="primary" control={<Radio />} label="Idoso" />
                                <FormControlLabel className='text-black' value="pcd" color="primary" control={<Radio />} label="PCD's" />

                            </ThemeProvider>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h4 className='text-psi text-center text-lg  '>Horário para agendamento</h4>
                <p className='text-center text-black text-sm'>Selecione o dia que deseja:</p>
                <input type="date" name="" id="" className='text-black rounded-3xl px-5 mt-2'/>

                <div className='grid grid-cols-5 gap-2 mt-6'>
                    {horarios.map((horario, idx) => (
                        <Horario
                            key={idx}
                            bg='bg-psi'
                            textClass='text-white'
                            hora={horario}
                        />
                    ))}
                </div>
            </div>

        </div>
            
        <button className='bg-psi text-white px-10 py-2 rounded-3xl m-auto mt-6 hover:border hover:border-[#7912ce] hover:scale-105 box-content transition duration-300 active:scale-90'>Buscar</button>
    </div>
  )
}

export default FiltrosDetails