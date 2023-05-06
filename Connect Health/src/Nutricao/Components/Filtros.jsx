import React from 'react'
import Radio from "@mui/material/Radio"
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { MdTune } from "react-icons/md"
import { AiOutlineArrowDown } from "react-icons/ai"
import FiltrosDetails from '../../Components/miniComponents/FIltrosDetails';


const Filtros = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#94E127',
            },
            
        },
    })


    const [open, setOpen] = useState(null)

    const close = () => {
        setOpen(null)
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const [backdrop, setBackdrop] = useState(false)
    const handleClose = () => {
        setBackdrop(false);
      };
    const handleOpen = () => {
        setBackdrop(true);
    };

  return (
    <div className='mt-20 mb-10'>
        <h2 className='text-center text-nutri font-bold text-3xl mb-14'>
            Nossos Nutricionistas
        </h2>

        <div  className='flex justify-between mx-14'>
            <div className='flex items-center'>
                <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >    
                <ThemeProvider theme={theme}>
                     <FormControlLabel  value="todos" control={<Radio />} label="Todos"  />
                    <FormControlLabel value="recomendados" color="primary" control={<Radio />} label="Recomendados" />
                </ThemeProvider>
                </RadioGroup>
                </FormControl>

                
            </div>

            <div className='flex gap-10'>
                <button onClick={handleOpen} className='flex items-center font-semibold gap-1'>
                    Filtros
                    <MdTune />
                </button>

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backdrop}
                    
                >
                    
                    <div className='w-2/3 h-[90%] bg-white bg-opacity-90 backdrop-blur-xl rounded-md'>
                        <p onClick={handleClose} className='text-black absolute right-0 pr-3 pt-1 cursor-pointer font-bold text-2xl'>X</p>
                        <FiltrosDetails 
                            theme='#94E127'
                            color='nutri'
                            secColor='[#00ff9d]'
                            
                        />
                    </div>
                </Backdrop>

                <button onClick={(e) => handleClick(e)} className='flex items-center font-semibold border px-3 rounded-3xl gap-1'>
                    Relevância
                    <AiOutlineArrowDown />

                </button>

                <Menu
                    anchorEl={open}
                    open={open}
                    onClose={close}
                >
                    <MenuItem onClick={() => {
                        close()
                    }}>Melhores avaliados</MenuItem>
                    <MenuItem onClick={() => {
                        close()
                    }}>Menor Preço</MenuItem>
                    <MenuItem onClick={() => {
                        close()
                    }}>Maior Preço</MenuItem>
                </Menu>

                
            </div>
        </div>


    </div>
  )
}

export default Filtros