import React from 'react'
import { Link } from 'react-router-dom'
import Modo from '../../../assets/mode.png'
import {BsArrowRight} from 'react-icons/bs'
import vetor from '../../../assets/vectorHome.svg'
import BarsSolid from '../../../assets/bars-solid.svg'


import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from "react"
import Menu from '../../Components/Menu'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Header = () => {
  const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            
        } else {
            document.documentElement.classList.remove("dark");
            
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

  return (
    <div id='home' className='relative z-50 '>
      
      <div className='flex justify-between items-center py-3 px-10 bg-[#f5f5f5] dark:bg-white/0'>
        <div className='flex gap-10 z-10 
        max-md:-ml-5 max-md:w-[90%] 
        '>
          <Menu 
            area4="Eventos Empresariais"
            area1="Area psicologia"
            area2="Area nutrição"
            area3="Feed de noticias"
  
            home="psicologia"
            link2="nutricao"
            link3="feed"
            link4="eventos"
          />
          <Link to='/' className='hidden max-md:block max-md:m-auto max-md:text-xl max-md:font-semibold'>Connect<span className='text-[#5D59FF]'>Health</span></Link>
          <Link to='/psicologia' className='text-black font-bold uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300 dark:text-white hover:border-b
          max-md:hidden
          '>Psicologia</Link>
          <Link to='/nutricao' className='text-black font-bold uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300 dark:text-white hover:border-b
          max-md:hidden
          '>Nutrição</Link>
          <Link to='/feed' className='text-black font-bold uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300 dark:text-white hover:border-b
          max-md:hidden
          '>Feed de Notícias</Link>
          <Link to='/eventos' className='text-black font-bold uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300 dark:text-white hover:border-b
          max-md:hidden
          '>Eventos</Link>
        </div>

        <div className='gap-6 flex mr-20 items-center'>
          <Link to='/register' className='text-black font-bold uppercase text-sm hover:scale-110 hover:font-semibold transition duration-300 dark:text-white
          max-md:hidden
          '>Cadastro</Link>
          <Link to='/login' className='text-black font-bold uppercase text-sm hover:bg-azulsite hover:text-white hover:font-semibold transition duration-150 bg-white py-2 px-3 rounded
          max-md:hidden
          '>Login</Link>
        </div>
        {/* <div className='bg-[#0575E6] h-auto w-40 absolute z-50 top-0 right-36 items-center flex-col
        max-md:hidden
        '>
          <img src={vetor} alt=""  className='absolute'/>
          <div>
            <h2 className='text-[#fff] text-center pt-20 pb-6
            max-md:text-[10px] max-md:pt-10 max-md:pb-2
            '>Tenha dicas dos melhores da área</h2>
          </div>
            
          <div className='flex items-center justify-center gap-4 pb-4 hover:scale-110 hover:font-semibold transition duration-300'>
              <Link to='/' className='text-[#fff] text-center font-bold text-sm 
              max-md:text-[10px] max-md:mt-4
              '>Nosso Feed</Link>
              <BsArrowRight className='text-lg text-[#fff]
              max-md:mt-4 max-md:-ml-3
              '/>
          </div>
            
        </div> */}
        <FormGroup onClick={handleThemeSwitch} className='absolute right-0'>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }}  />}
            />
          </FormGroup>
      </div>
        
    </div>
  )
}

export default Header