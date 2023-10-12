import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useEffect } from 'react';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Stack } from '@mui/material';
// components
import Scrollbar from '../scrollbar'
import { changeLang } from '../../../App';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import icon_flickstar from '../../../assets/images/icon_flickstar.png'
import AccountPopover from '../header/AccountPopover';
//css
import '../../../assets/css/side.nav.css'
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  // alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const [language, setLanguage] = useState('')
  const [login, setLogin] = useState(true)
  const navigate = useNavigate();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  useEffect(() => {
    changeLang(language)
  }, [language])

  const { t } = useTranslation();

  const account = {
    displayName: 'Erik',
    email: 'demo@minimalscom',
    photoURL: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
  };

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }} className='header_nav_box_main'>
        <Link underline="none">
          <StyledAccount>
            <AccountPopover />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {account.email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
      <Box sx={{ px: 2.5 }} className='side_nav_main'>
        <div className='nav_title cursor_pointer' onClick={() => navigate('/')} ><img src={icon_flickstar} width={126.27} height={27.86} /></div>
        <Box />

        <Stack >
          <div className='sidenav_sec_div'>
            <ul className='side_nav_ul cursor_pointer'>
              <li onClick={() => navigate('/movies')}>{t('MOVIES')}</li>
              <li>{t('TV_SHOWS')}</li>
              <li>{t('WEB_SERIES')}</li>
              <li onClick={() => navigate('/kids')}>{t('KIDS')}</li>

              <div className='sidenav_live_div cursor_pointer'>
                <div className='lives_div'>
                  <p className='lives_p'>{t('LIVE')}</p>
                  <span>{t('STREAMING')}</span>
                </div>
                <li className='side_nav_sub cursor_pointer'>{t('SUBSCRIBE')}</li>
                <div className='side_nav_icon cursor_pointer'>
                  <div><SearchIcon /></div>
                  <div><NotificationsNoneIcon /></div>
                </div>
              </div>
            </ul>
          </div>
        </Stack>
      </Box>

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Drawer
        open={openNav}
        onClose={onCloseNav}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: { width: NAV_WIDTH },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
