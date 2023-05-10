import axios from "axios";
import { useState, useEffect } from "react";
import { Box, CircularProgress, ThemeProvider } from '@mui/material'


function ApiRequisicao({path}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8080/profissionais/${path}`).then(response => {
        setData(Response.data);
        setIsLoading(false);
        });
    }, [path])

    if (isLoading) {
        return <div className='flex justify-center items-center text-black'>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress color='primary' />
            </Box>
          </ThemeProvider>
        </div>
    }
}