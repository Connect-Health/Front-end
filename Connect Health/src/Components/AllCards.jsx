import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './../Nutricao/Components/Card'

const AllCards = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchProfissionais() {
      try {
        const response = await axios.get('http://localhost:8080/profissionais')
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfissionais()
  }, [])

  if (isLoading) {
    return <div className='flex'>Loading...</div>
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
