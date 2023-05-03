import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9A54E1',
        },
        
    },
})

const Paginacao = () => {
  return (
    <div className='mt-10'>
         <Stack >
            <ThemeProvider theme={theme}>
                <Pagination className='m-auto my-10'
                count={10} variant="outlined" shape="rounded" color="primary"
                />
             </ThemeProvider>
        </Stack>

    </div>
  )
}

export default Paginacao;