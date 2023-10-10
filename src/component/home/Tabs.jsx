import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../assets/css/Home.css'
import section3tv_image from '../../assets/images/home/section3tv_image.png'
import watch_overlay from '../../assets/images/home/watch_overlay.png'
import create_profile_overlay from '../../assets/images/home/create_profile_overlay.png'
import { useTranslation } from 'react-i18next';
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const { t } = useTranslation();
    return (
        <Box sx={{ width: '100%' }} className={`section_three_container ${value == 0 ? `class1` : value == 1 ? `class2` : `class3`} `}>
            <div className='tab_sec_container '>
            <CustomTabPanel value={value} index={0} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={t('DOWNLOAD')} {...a11yProps(0)} />
                        <Tab label={t('WATCH')} {...a11yProps(1)} />
                        <Tab label={t('CREATE_PROFILES')} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <div className='tab_div_main'>
                    <div className='section_three_first'>
                        <span className='tab_span'> {t('SHOW_OFFLINE_DOWNLOAD')}</span>
                        <p className='teb_para' >{t('HITS_MOVIES_AND_SHOW')}</p>
                    </div>
                    <div className='section3_img_div tab_image1'>
                        {/* <img src={section3tv_image} className='section3_img tab_image' height={638.34} width={1060.19} /> */}
                    </div>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={t('DOWNLOAD')} {...a11yProps(0)} />
                        <Tab label={t('WATCH')} {...a11yProps(1)} />
                        <Tab label={t('CREATE_PROFILES')} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <div className='tab_div_main'>
                    <div className='section_three_first'>
                        <span className='tab_span'> {t('WATCH_EVERYWHERE')}</span>
                        <p className='teb_para' >{t('STREAM_UNLIMITED_ALL_DEVICES')}</p>
                    </div>
                    <div className='section3_img_div tab_image2'>
                        {/* <img src={watch_overlay} className='section3_img tab_image' height={638.34} width={1060.19} /> */}
                    </div>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label={t('DOWNLOAD')} {...a11yProps(0)} />
                        <Tab label={t('WATCH')} {...a11yProps(1)} />
                        <Tab label={t('CREATE_PROFILES')} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <div className='tab_div_main'>
                    <div className='section_three_first'>
                        <span className='tab_span'>{t('CREATE_PROFILES_FOR_KIDS')}</span>
                        <p className='teb_para' >{t('SEND_CHILDREN_ON_ADVENTURES')}</p>
                    </div>
                    <div className='section3_img_div tab_image3'>
                        {/* <img src={create_profile_overlay} className='section3_img tab_image' height={638.34} width={1060.19} /> */}
                    </div>
                </div>
            </CustomTabPanel>
            </div>
        </Box>
    );
}