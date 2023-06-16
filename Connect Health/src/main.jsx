import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/app'
import './index.css'
import Nutricao from './Nutricao/Nutricao'

import "@fontsource/montserrat"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import { AuthProvider } from './AutoContext/AuthContext'
import Eventos from './Complementares/Eventos/Eventos'
import Politica from './Complementares/Politica/Politica'
import Chatbot from './Components/ChatBot/Chatbot'
import Login from './Components/Login/Login'
import Loginprof from './Components/Login/Loginprof'
import Register from './Components/Register/Register'
import Register2 from './Components/Register/Register2'
import Feed from './Feed/app'
import Carrossel from './Home/Componentes/Carrossel'
import Pagamentos from './Pagamentos/Pagamentos'
import Perfil from './Perfil/perfil'
import Perfil_Psi from './Perfil_Psico/perfil'
import Profissional from './Profissional/Profissional'
import ProfissionalPsi from './Profissional/ProfissionalPsi'
import Psicologia from './Psicologia/Psicologia'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          return "Hello World!";
        }
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
      {
        path: '/perfil_nutri',
        element: <Perfil />,
      },
      {
        path: '/perfil_psi',
        element: <Perfil_Psi />,
      },
      {
        path: '/eventos',
        element: <Eventos />,
      },
      {
        path: '/chat',
        element: <Chatbot />,
      },
      {
        path: '/pagamentos',
        element: <Pagamentos />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
        <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>
)
