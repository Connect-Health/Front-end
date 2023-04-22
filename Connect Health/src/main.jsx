import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/app'
import './index.css'
import Nutricao from './Nutricao/Nutricao'

import "@fontsource/montserrat"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Nutricao />
  </React.StrictMode>,
)
