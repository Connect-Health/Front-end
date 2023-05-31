import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/app'
import './index.css'
import Nutricao from './Nutricao/Nutricao'

import "@fontsource/montserrat"

import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Psicologia from './Psicologia/Psicologia'
import Profissional from './Profissional/Profissional'
import ProfissionalPsi from './Profissional/ProfissionalPsi'
import Login from './Components/Login/Login'
import Loginprof from './Components/Login/Loginprof'
import Register from './Components/Register/Register'
import Feed from './Feed/app'
import Register2 from './Components/Register/Register2'
import Politica from './Complementares/Politica/Politica'
import Carrossel from './Home/Componentes/Carrossel'

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
    path: '/profissional/nutricionista/:id',
    element: <Profissional />,
  },
  {
    path: '/profissional/psicologo/:id',
    element: <ProfissionalPsi />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/loginprof',
    element: <Loginprof />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/registerProfissional',
    element: <Register2 />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/politica',
    element: <Politica />,
  },
  {
    path: '/calendario',
    element: <Carrossel />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
