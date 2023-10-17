import { useState } from 'react';
import React from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Avatar, IconButton, Popover } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageSelector from './LanguageSelector';
// import logout from '../../../assets/images/logout.png'
// css
// import '../../../assets/css/AccontPopver.css'
// ----------------------------------------------------------------------


export default function SettingMenu() {
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
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
                <SettingsIcon />
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

                    <div className='account_p_div_main cursor_pointer'>
                        <Typography variant="subtitle2" noWrap>
                           <LanguageSelector />
                        </Typography>
                    </div>

                </Box>
                <Divider sx={{ borderStyle: 'solid' }} />
            </Popover>
        </>
    );
}
