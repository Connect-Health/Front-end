import React from 'react'
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const FiltrosDetails = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#94E127',
            },
            
        },
    })


  return (
    <div>
        <div>
            <h2 className='text-nutri uppercase text-center text-xl font-bold mt-5'>Filtros</h2>
        </div>

        <div className='flex flex-col items-center mt-12'>
            <h2 className='text-center text-[#000] text-lg font-semibold '>Já conhece o profissional que deseja?</h2>
            <input type="text" placeholder='Nome do profissional' className='w-96 py-2 rounded-3xl pl-5 placeholder:text-[#333] focus:border outline-none focus:border-nutri text-[#000]' />
        </div>

        <div className='grid grid-cols-2 mx-[2%] mt-10'>
            <div>
                <h4 className='text-nutri text-center  text-lg '>Especialidades</h4>

                <div className='flex flex-wrap gap-2 justify-center mt-3'>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Ansiedade</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Bournout</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Borderline</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Conflitos Amorosos</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Família</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Deficit de Atenção</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Depressão</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Estresse</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Desenvolvimento Pessoal</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Autoconhecimento</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Compulsões</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Morte e luto</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Fobias</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Drogas</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Medos</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Obesidade</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Sexualidade</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Insônia</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Sindrome do Panico</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>Autoestima</p>
                    <p className='border border-[#000] text-[#000] w-fit rounded-3xl px-3 text-sm'>TOC - Transtorno Obsessivo Compulsivo</p>
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
            </div>
        </div>
    </div>
  )
}

export default FiltrosDetails