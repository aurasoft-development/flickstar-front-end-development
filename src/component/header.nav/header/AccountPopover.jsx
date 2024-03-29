import { useState } from 'react';
import React from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Avatar, IconButton, Popover } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddIcon from '@mui/icons-material/Add';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import logout from '../../../assets/images/logout.png'
// css
import '../../../assets/css/AccontPopver.css'
import { loginAuth } from '../../../features/auth/LoginSlice';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------


export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const account = {
    displayName: 'Erik',
    email: 'demo@minimals.cc',
    photoURL: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
  };

  const { t } = useTranslation();

  //active tab functionality function
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 10.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }} display={'flex'} flexDirection={'column'} gap={1}>

          <div className='account_p_div_main cursor_pointer'> <Avatar src='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' height={50} width={50} />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => handleTabClick(1)}>
              {t('ERIK')}
            </Typography>
          </div>
          <div className='account_p_div_main cursor_pointer'> <Avatar src='' height={50} width={50} />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => handleTabClick(2)}>
              {t('DORTA')}
            </Typography>
          </div>
          <div className='account_p_div_main cursor_pointer'> <Avatar src='' height={50} width={50} />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 3 ? 'active' : ''}`}
              onClick={() => handleTabClick(3)}>
              {t('DORTA')}
            </Typography>
          </div>
          <div className='account_p_div_main cursor_pointer'>
            <ManageAccountsIcon fontSize='large' />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 4 ? 'active' : ''}`}
              onClick={() => handleTabClick(4)}>
              {t('MY_ACCOUNT')}
            </Typography>
          </div>
          <div className='account_p_div_main cursor_pointer'>
            <AddIcon fontSize='large' />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 5 ? 'active' : ''}`}
              onClick={() => { handleTabClick(5); navigate('/watch') }}>
              {t('WATCH_LIST')}
            </Typography>
          </div>
          <div className='account_p_div_main cursor_pointer'>
            <AddIcon fontSize='large' />
            <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 6 ? 'active' : ''}`}
              onClick={() => { handleTabClick(6); navigate('/manage_profile') }}>
              {t('MANAGE_PROFILE')}
            </Typography>
          </div>

        </Box>
        <Divider sx={{ borderStyle: 'solid' }} />
        <div className='cursor_pointer account_p_logout'>
          {/* <LogoutRoundedIcon /> */}
          <img src={logout} width={20} height={20} />
          <Typography variant="subtitle2" noWrap className={`tab1 ${activeTab === 7 ? 'active' : ''}`}
            onClick={() => { localStorage.removeItem('user_login'); navigate('/login'); dispatch(loginAuth('false')); handleTabClick(7) }} >
            {t('LOGOUT')}
          </Typography>
        </div>
      </Popover>
    </>
  );
}
