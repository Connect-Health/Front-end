import { Box, CircularProgress } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9A54E1',
    },
  },
});

const pageSize = 10;

const AllCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);

  async function fetchProfissionais() {
    try {
      const response = await axios.get(
        `https://connecthealth-backend.onrender.com/profissional/psicologos?page=${page}`
      );
      setData(response.data);
      const totalCount = response.data.length;
      setCount(Math.ceil(totalCount / pageSize));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchProfissionais();
  }, [page]);

  const handleChangePage = (event, value) => {
    setPage(value);
    componentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={componentRef} />
      {isLoading ? (
        <div className='flex justify-center items-center text-black'>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress color='primary' />
            </Box>
          </ThemeProvider>
        </div>
      ) : (
        <>
          {data.length > 0 ? (
            <div className='grid grid-cols-2 gap-x-[5%] mx-[2.5%] gap-y-9 max-md:grid-cols-1'>
              {data.slice((page - 1) * pageSize, page * pageSize).map((profissional) => (
                <Card
                  border='psi'
                  border2='psi'
                  bg="border-psi"
                  bg2='bg-[#D8CAFF]'
                  border3='[#D8CAFF]'
                  texto='psi'
                  key={profissional.id}
                  profissional={profissional}
                  areaUrl='psicologo'
                />
              ))}
            </div>
          ) : (
            <div className='flex justify-center items-center text-black'>
              <p>Não foi possível carregar os dados.</p>
            </div>
          )}
          <Stack>
            <ThemeProvider theme={theme}>
              <Pagination
                className='m-auto my-10'
                count={count}
                page={page}
                variant='outlined'
                shape='rounded'
                color='primary'
                onChange={handleChangePage}
              />
            </ThemeProvider>
          </Stack>
        </>
      )}
    </>
  );
};

export default AllCards;