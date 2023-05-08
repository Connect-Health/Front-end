import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './../Nutricao/Components/Card'
import { Box, CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AllCards = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchProfissionais() {
      try {
        const response = await axios.get('http://localhost:8080/profissionais/nutricionistas')
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfissionais()
  }, [])
  

  const theme = createTheme({
    palette: {
        primary: {
            main: '#94E127',
        },
        
    },
  })

  if (isLoading) {
    return <div className='flex justify-center items-center text-black'>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress color='primary' />
        </Box>
      </ThemeProvider>
      
    </div>
  }

  return (
    <div className='grid grid-cols-2 gap-x-[5%] mx-[2.5%] gap-y-9'>
      {data.map((profissional) => (
        <Card key={profissional.id} profissional={profissional} />
      ))}
    </div>
  )
}

export default AllCards
