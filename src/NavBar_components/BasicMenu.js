import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import AddTODO from '../components/AddTODO';
import { withTheme } from '@emotion/react';





export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAcount = () => {
    setAnchorEl(null);
    navigate("/display")
  };

  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/")
  }

  const toProfile = () => {
    setAnchorEl(null);
    navigate('/profile')
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        

        <Avatar
  sx={{ bgcolor: withTheme[500] }}
  alt="Remy Sharp"
  
>
  
  
</Avatar>
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleLogout}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={toProfile}>Profile</MenuItem>
        <MenuItem onClick={handleAcount}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
