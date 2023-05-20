import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from './Card';
import { Box, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  palette: {
    primary: {
      main: '#94E127',
    },
  },
});

const pageSize = 4;

const AllCards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);

  async function fetchProfissionais() {
    try {
      let url;
      if (window.innerWidth <= 480) {
        url = `http://192.168.0.102:8080/profissional?page=${page}`;
      } else {
        url = `http://localhost:8080/profissional?page=${page}`;
      }
  
      const response = await axios.get(url);
      setData(response.data);
      const totalCount = response.data.length;
      setCount(Math.ceil(totalCount / pageSize));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  console.log(data)
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
            <div className='grid grid-cols-2 gap-x-[5%] mx-[2.5%] gap-y-9 max-md:grid-cols-1 max-md:gap-y-3'>
              {data.slice((page - 1) * pageSize, page * pageSize).map((profissional) => (
                <Card
                  border='[#94E127]'
                  border2='nutri'
                  border3='[#D7F2E0]'
                  bg2='bg-[#D7F2E0]'
                  texto='nutri'
                  key={profissional.id}
                  profissional={profissional}
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