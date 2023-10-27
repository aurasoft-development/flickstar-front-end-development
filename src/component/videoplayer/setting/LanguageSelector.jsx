// LanguageSelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../../features/video-player/videoSlice';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../../../assets/css/Setting/LanguageSellector.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Language
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleClose; handleLanguageChange('en') }}>English</MenuItem>
        <MenuItem onClick={() => { handleClose; handleLanguageChange('hi') }}>Hindi</MenuItem>
      </Menu>
    </div>
  );
}
