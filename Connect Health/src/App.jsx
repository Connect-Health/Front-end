import React, {useContext} from 'react'
import {  Outlet } from 'react-router-dom'
import { AuthContext } from './AutoContext/AuthContext'

const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
        <Outlet>
        </Outlet>  
    </div>
  )
}

export default App