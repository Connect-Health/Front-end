import {  Menu, MenuItem, Avatar } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../AutoContext/AuthContext';
import { Link } from 'react-router-dom';
import { deepOrange } from '@mui/material/colors';

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
            {user.urlAvatar ? (
              <img src={user.urlAvatar} alt='Avatar' className='w-14 h-14 object-top object-cover rounded-full' />
            ) : (
              <Avatar sx={{ bgcolor: '#9FDFF4' }} className='w-14 h-14 rounded-full'>
                {user.nome.charAt(0)}
              </Avatar>
            )}
            </button>
            {console.log(user.urlAvatar)}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {user && user.areaAtuacao && user.areaAtuacao.areaId == 2 && (
                <MenuItem component={Link} to="/perfil_nutri" onClick={handleMenuClose}>
                  Dashboard
                </MenuItem>
              )}
              {user && user.areaAtuacao && user.areaAtuacao.areaId == 1 && (
                <MenuItem component={Link} to="/perfil_psi" onClick={handleMenuClose}>
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