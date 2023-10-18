// LanguageSelector.js
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { setPlaybackRate } from '../../../features/video-player/playbackRateSlice';

export default function PlayRate() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePlaybackRateChange = (newRate) => {
    dispatch(setPlaybackRate(newRate));
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
        Playback Speed
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
          <MenuItem onClick={() => handlePlaybackRateChange(0.25)}>0.25</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(0.50)}>0.50</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(0.75)}>0.75</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(1)}>normal</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(1.25)}>1.25</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(1.50)}>1.50</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(1.75)}>1.75</MenuItem>
          <MenuItem onClick={() => handlePlaybackRateChange(2)}>2</MenuItem>
      </Menu>
    </div>
  );
}
