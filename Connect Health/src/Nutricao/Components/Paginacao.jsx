import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#94E127',
        },
        
    },
})

const paginacao = () => {
  return (
    <div>
         <Stack>
            <ThemeProvider theme={theme}>
                <Pagination className='m-auto my-10'
                count={10} variant="outlined" shape="rounded" color="primary"
                />
             </ThemeProvider>
        </Stack>

    </div>
  )
}

export default paginacao