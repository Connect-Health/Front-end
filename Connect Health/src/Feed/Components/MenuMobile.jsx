import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MenuMobile = () => {
    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <div className='w-full fixed bottom-0 hidden max-md:block'>
        <Box >
            <BottomNavigation
                showLabels
                value={value} onChange={handleChange}
            >
        
        <BottomNavigationAction label="Postar" value="Postar" icon={<AddIcon />} />
                
        
            </BottomNavigation>
        </Box>
    </div>
  )
}

export default MenuMobile