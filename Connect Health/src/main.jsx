import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/app'
import './index.css'
import Nutricao from './Nutricao/Nutricao'

import "@fontsource/montserrat"

import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Psicologia from './Psicologia/Psicologia'
import Profissional from './Profissional/Profissional'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nutricao',
    element: <Nutricao />,
  },
  {
    path: '/psicologia',
    element: <Psicologia />,
  },
  {
    path: '/profissional/:id',
    element: <Profissional />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
