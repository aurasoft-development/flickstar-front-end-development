import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../assets/css/DownloadMenu.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';


const ITEM_HEIGHT = 48;

export default function DownloadMenu() {
    const [isDownloading, setDownloading] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const videoUrl = useSelector((state) => state.video.url);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // video download functionality 
    const handleDownload = () => {
        setDownloading(true);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = () => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(xhr.response);
            a.download = 'testing.mp4';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setDownloading(false);
        };
        xhr.open('GET', videoUrl);
        xhr.send();
    };

    return (
        <div className='download_menu_main'>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 'auto',
                    },
                }}
            >
                <button className='cursor_pointer download_btn' onClick={handleDownload} disabled={isDownloading}>
                    {isDownloading ? 'Downloading...' : 'Download Video'}
                </button>
            </Menu>
        </div>
    );
}