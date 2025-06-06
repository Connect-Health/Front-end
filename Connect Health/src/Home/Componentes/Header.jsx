import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../AutoContext/AuthContext'
import { ThemeContext } from '../../AutoContext/ThemeContext';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from "react"
import Menu2 from '../../Components/Menu'
import Perfil from '../../Components/Perfil'
import Notificacao from '../../Components/Notificacao';
import usePersistedState from '../../utils/usePersistedState';

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
  const { user } = useContext(AuthContext)
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div id='home' className={`z-50 w-full fixed top-0 transition-colors duration-300 ${scrolled ? 'bg-[#f5f3e0] dark:bg-[#0c0914fa]' : 'bg-[#ffffff00] dark:bg-white/0'}`}>
      <div className='flex justify-between items-center py-4 max-md:pb-8 px-10 max-md:justify-center'>
        <div className='flex gap-10 z-10'>
          <div className='absolute top-0 left-1'>
            <Menu2
              area4="Eventos Empresariais"
              area1="Area psicologia"
              area2="Area nutrição"
              area3="Feed de noticias"
              home="psicologia"
              link2="nutricao"
              link3="feed"
              link4="eventos"
            />
          </div>
          <Link to='/' className='hidden max-md:block max-md:m-auto max-md:text-xl max-md:font-semibold max-md:absolute left-1/2 -translate-x-1/2 top-2.5'>Connect<span className='text-[#5D59FF]'>Health</span></Link>
          <Link to='/psicologia' className='text-black font-bold uppercase text-sm hover:scale-110 hover:text-[#beb139] dark:hover:text-[#ffef61] hover:font-semibold transition duration-300 dark:text-white hover:border-b max-md:hidden'>
            Psicologia
          </Link>
          <Link to='/nutricao' className='text-black font-bold uppercase text-sm hover:scale-110 hover:text-[#beb139] dark:hover:text-[#ffef61] hover:font-semibold transition duration-300 dark:text-white hover:border-b max-md:hidden'>
            Nutrição
          </Link>
          <Link to='/feed' className='text-black font-bold uppercase text-sm hover:scale-110 hover:text-[#beb139] dark:hover:text-[#ffef61] hover:font-semibold transition duration-300 dark:text-white hover:border-b max-md:hidden'>
            Feed de Notícias
          </Link>
          <Link to='/eventos' className='text-black font-bold uppercase text-sm hover:scale-110 hover:text-[#beb139] dark:hover:text-[#ffef61] hover:font-semibold transition duration-300 dark:text-white hover:border-b max-md:hidden'>
            Eventos
          </Link>
        </div>

        <div className='gap-6 flex mr-20 items-center'>
          {user ? (
            <div className='max-md:hidden flex items-center gap-8'>
              <Notificacao />
              <Perfil />
            </div>
          ) : (
            <div className='flex items-center gap-5'>
              <Link to='/register' className='text-black font-bold uppercase text-sm hover:scale-110 hover:text-[#beb139] dark:hover:text-[#ffef61] hover:font-semibold hover:border-b transition duration-300 dark:text-white max-md:hidden'>
                Cadastro
              </Link>
              <Link to='/login' className='text-black font-bold uppercase text-sm hover:bg-[#beb139]  hover:text-white hover:font-semibold transition duration-300 bg-white py-2 px-3 rounded max-md:hidden'>
                Login
              </Link>
            </div>
          )}
        </div>
        <FormGroup onClick={toggleTheme} className='absolute right-0 max-md:-top-1'>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            checked={theme === "dark"}
          />
        </FormGroup>
      </div>
    </div>
  )
}

export default Header