import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import english_video from '../../../assets/video/english_video.mp4'
import video_medium from '../../../assets/video/video_medium.mp4'
import { setVideoUrl } from '../../../features/video-player/videoSlice';
import '../../../assets/css/Setting/VideoQuality.css'


export default function VideoQuality() {
    console.log('hellos')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const videoQuality = useSelector((state) => state.video.url);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleQualityChange = (quality) => {
        // Update the video quality in the Redux store
        dispatch(setVideoUrl(quality))
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
                Video Quality
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
                <select
                    // value={videoQuality.quality}
                    onChange={(e) => handleQualityChange(e.target.value)}
                >
                    <option value={english_video}>Auto</option>
                    <option value={video_medium} >144p</option>
                    <option value={english_video}>220p</option>
                    <option value={video_medium}>360p</option>
                    <option value={english_video}>720p</option>
                    <option value={video_medium}>1080p</option>
                    {/* Add more quality options as needed */}
                </select>
            </Menu>
        </div>
    );
}
