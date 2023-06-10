import {  Menu, MenuItem } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../AutoContext/AuthContext';
import { Link } from 'react-router-dom';

const Perfil = () => {
  const { user, logout } = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <div>
        <div className=''>
            <button onClick={handleMenuOpen}>
            <img src={user.urlAvatar} alt='Avatar' className='w-10 h-10 object-cover rounded-full' />
            </button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {user && (
                <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                  Dashboard
                </MenuItem>
              )}
              {user && (
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              )}
            </Menu>
          </div>
    </div>
  )
}

export default Perfil