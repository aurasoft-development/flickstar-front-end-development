import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Button, FormControl, NativeSelect } from '@mui/material';
// utils
import { bgBlur } from '../cssStyles'
// components
import '../../../assets/css/nav.css'
import AccountPopover from './AccountPopover';
import icon_flickstar from '../../../assets/images/icon_flickstar.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { changeLang } from '../../../App';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import ContentWrapper from '../../contentWrapper/ContentWrapper'
// import { SlMenu } from "react-icons/sl";
// import { VscChromeClose } from "react-icons/vsc";
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
export default function Header({ onOpenNav }) {
  const [language, setLanguage] = useState('')
  const [login, setLogin] = useState()
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarStyle, setNavbarStyle] = useState({ top: '0' });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setNavbarStyle({ top: '0' });
      } else {
        setNavbarStyle({ top: '-100px' });
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem('user_login')
    setLogin(data)
  }, [navigate])

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  useEffect(() => {
    changeLang(language)
  }, [language])

  const { t } = useTranslation();
  return (
    <StyledRoot id="navbar" style={navbarStyle}>
      <div className='header-1200 p-l p-r' >
        <div>
          <IconButton
            onClick={onOpenNav}
            sx={{
              mr: 1,
              color: 'white',
              display: { lg: 'none' },
            }}
          >
            <img src={icon_flickstar} width={126.27} height={27.86} />
          </IconButton>
        </div>
        <div className='header_nav_sec'>
          <div className='header_nav_language'><LanguageIcon />
            <FormControl fullWidth>
              <NativeSelect
                // defaultValue={'hi'}
                disableUnderline
                value={language}
                onChange={handleChange}
              >
                <option value={'en'} >English</option>
                <option value={'hi'}> हिन्दी </option>
              </NativeSelect>
            </FormControl>
          </div>
          {login == "true" ?
            <div>
              <AccountPopover />
            </div>
            : <Button onClick={() => navigate('/login')} className='li_button font_width_height' sx={{ textTransform: "none" }}  >{t('SIGN_IN')}</Button>
          }
        </div>
      </div>

      <StyledToolbar className='header_nav_main '>

        <div className={`tab1 ${activeTab === 1 ? 'active' : ''} nav_title cursor_pointer p-l`}
          onClick={() => { navigate('/'); handleTabClick(1) }} ><img src={icon_flickstar} width={126.27} height={27.86} /></div>
        <Box />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <div className='p-r'>
            <ul className='font_width_height cursor_pointer header_nav_item'>
              <li className={`tab1 ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => { navigate('/movies'); handleTabClick(2) }}>{t('MOVIES')}</li>

              <li className={`tab1 ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}>{t('TV_SHOWS')}</li>

              <li className={`tab1 ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => handleTabClick(4)}>{t('WEB_SERIES')}</li>

              <li className={`tab1 ${activeTab === 5 ? 'active' : ''}`}
                onClick={() => { navigate('/kids'); handleTabClick(5) }}>{t('KIDS')}</li>


              {login == "true" ?
                <div className='header_login_div'>
                  <div className='header_lives_main'>
                    <p className='lives_p'>{t('LIVE')}</p>
                    <span className={`tab1 ${activeTab === 6 ? 'active' : ''}`}
                      onClick={() => handleTabClick(6)} >{t('STREAMING')}</span>
                  </div>
                  <li className={`tab1 ${activeTab === 7 ? 'active' : ''} header_nav_sub`}
                    onClick={() => handleTabClick(7)} >{t('SUBSCRIBE')}</li>

                  <div className={`tab1 ${activeTab === 8 ? 'active' : ''} `}
                    onClick={() => handleTabClick(8)}><SearchIcon onClick={openSearch} /></div>

                  <div className={`tab1 ${activeTab === 9 ? 'active' : ''}`}
                    onClick={() => handleTabClick(9)}><NotificationsNoneIcon /></div>

                  <div className='header_nav_language'><LanguageIcon />
                    <FormControl fullWidth>
                      <NativeSelect
                        // defaultValue={'hi'}
                        disableUnderline
                        value={language}
                        onChange={handleChange}
                      >
                        <option value={'en'} >English</option>
                        <option value={'hi'}> हिन्दी </option>
                      </NativeSelect>
                    </FormControl>
                  </div>
                  <AccountPopover />
                </div>
                : <Button onClick={() => navigate('/login')} className='li_button font_width_height' sx={{ textTransform: "none" }}  >{t('SIGN_IN')}</Button>
              }
            </ul>
          </div>
        </Stack>
      </StyledToolbar>
      {showSearch && (
        <div className="searchBar p-l p-r">
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
    </StyledRoot>
  );
}
