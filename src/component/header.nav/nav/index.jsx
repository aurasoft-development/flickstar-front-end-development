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
import { useSelector, useDispatch } from 'react-redux';
import ContentWrapper from '../../contentWrapper/ContentWrapper';
import { loginAuth } from '../../../features/auth/LoginSlice';
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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login)

  //active tab functionality function
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
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

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  useEffect(() => {
    const token = localStorage.getItem('user_login')
    dispatch(loginAuth(token))
  }, []);
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }} className='header_nav_box_main'>
        {data === "true" ? <Link underline="none">
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
        </Link> : ""}
      </Box>
      <Box sx={{ px: 2.5 }} className='side_nav_main'>
        <div className='nav_title cursor_pointer' onClick={() => navigate('/')} ><img src={icon_flickstar} width={126.27} height={27.86} /></div>
        <Box />

        <Stack >
          <div className='sidenav_sec_div'>
            <ul className='side_nav_ul cursor_pointer'>
              <li className={`tab1 ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => { navigate('/movies'); handleTabClick(2) }}>{t('MOVIES')}</li>
              <li className={`tab1 ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)} >{t('TV_SHOWS')}</li>
              <li className={`tab1 ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)} >{t('WEB_SERIES')}</li>
              <li className={`tab1 ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => { navigate('/kids'); handleTabClick(5) }}>{t('KIDS')}</li>

              <div className='sidenav_live_div cursor_pointer'>
                <div className='lives_div'>
                  <p className='lives_p'>{t('LIVE')}</p>
                  <span className={`tab1 ${activeTab === 6 ? 'active' : ''}`}
                    onClick={() => handleTabClick(6)} >{t('STREAMING')}</span>
                </div>
                <li className={`tab1 ${activeTab === 7 ? 'active' : ''} side_nav_sub cursor_pointer `}
                  onClick={() => handleTabClick(7)} >{t('SUBSCRIBE')}</li>
                <div className='side_nav_icon cursor_pointer'>
                  <div className={`tab1 ${activeTab === 8 ? 'active' : ''}`}
                    onClick={() => handleTabClick(8)} ><SearchIcon onClick={openSearch} /></div>
                  <div className={`tab1 ${activeTab === 9 ? 'active' : ''}`}
                    onClick={() => handleTabClick(9)} ><NotificationsNoneIcon /></div>
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
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <div className='input_search'>
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for a Web Shows, Movie & Genre etc"
                // onChange={(e) => setQuery(e.target.value)}
                // onKeyUp={searchQueryHandler}
                />
              </div>
              <span className='cursor_pointer' onClick={() => setShowSearch(false)}>Clear</span>
            </div>
          </ContentWrapper>
        </div>
      )}
    </Box>
  );
}
