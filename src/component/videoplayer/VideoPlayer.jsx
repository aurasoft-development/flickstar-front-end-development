import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import ReactPlayer from 'react-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SensorsIcon from '@mui/icons-material/Sensors';
import '../../assets/css/VideoPlayer.css'
import english_video from '../../assets/video/english_video.mp4'
import video_medium from '../../assets/video/video_medium.mp4'
import { useDispatch, useSelector } from "react-redux";
// import { addRange } from '../../features/movies/movies.details';
import SettingMenu from './setting/SettingMenu';
import { setVideoUrl } from '../../features/video-player/videoSlice';
import movies_poster from '../../assets/images/kids/kids_slider.png'
import { addRange } from '../../features/movies/AddRange';
import ShareModel from '../model/ShareModel';
import DownloadMenu from './DownloadMenu';

const VideoPlayer = ({ show, setShow }) => {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const playerRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [brightness, setBrightness] = useState(1);
    const [selectedQuality, setSelectedQuality] = useState(null);
    const [played, setPlayed] = useState(0);
    const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const videoUrl = useSelector((state) => state.video.url);
    const language = useSelector((state) => state.video.language);
    const playbackRate = useSelector((state) => state.playbackRate);
    const dispatch = useDispatch()

    // Define a map of video URLs for different languages
    const languageVideoUrls = {
        en: english_video,
        hi: video_medium,
        // Add more language URLs as needed
    };

    // Based on the selected language, choose the appropriate video URL
    const getLocalizedVideoUrl = () => {
        return languageVideoUrls[language] || languageVideoUrls.en;
    };

    // Set the video URL in the Redux store when it changes
    React.useEffect(() => {
        dispatch(setVideoUrl(getLocalizedVideoUrl()));
    }, [language, dispatch]);



    // input range countinue watching functionality

    const countinueWatching = () => {
        dispatch(addRange(played))
    }

    //sheeking and onProgress

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value)); // Update played time when the slider value changes
    };

    const handleSeekMouseDown = () => {
        setIsSeeking(true); // Set isSeeking to true when the user starts dragging the slider
    };

    const handleSeekMouseUp = () => {
        setIsSeeking(false); // Set isSeeking to false when the user releases the slider
        playerRef.current.seekTo(played); // Use the seekTo method to seek to the specified time (as a fraction)
    };

    // caption && subtitle 
    const tracks = [
        {
            kind: 'subtitles',
            src: 'subtitle/subtitles.en.vtt',
            srcLang: 'en',
            default: true, // Set to true for the default track
        },
    ];

    // show hide popup
    const hidePopup = () => {
        setShow(false);
    };

    // play pause

    const togglePlayPause = () => {
        setPlaying((prevPlaying) => !prevPlaying);
    };

    // 10 sec forward and 10 sec backward
    const handleForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };

    const handleBackward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = secs.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    // volume mute unmute

    useEffect(() => {
        const interval = setInterval(() => {
            if (playerRef.current) {
                setCurrentTime(playerRef.current.getCurrentTime());
                setDuration(playerRef.current.getDuration());
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const toggleMute = () => {
        setMuted(!muted);
    };

    // brightness

    const handleBrightnessChange = (e) => {
        const { value } = e.target;
        setBrightness(value);
    };

    const videoStyle = {
        filter: `brightness(${brightness})`,
    };

    // full screen 

    const toggleFullScreen = () => {
        if (playerRef.current) {
            setIsFullScreen(!isFullScreen);
            if (!isFullScreen) {
                playerRef.current.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    };
    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" ></div>

            <div className={`custom-video-player ${isFullScreen ? "fullscreen" : ""} videoPlayers `} >
                <div className='video_player_first'>
                    <div className='first_div_main closeBtn'>
                        <div className='arrow_div_main'>
                            <div onClick={() => { setPlaying(false); hidePopup(); countinueWatching() }}> <ArrowBackIcon /></div>
                            <span className='movies_title_name'>Movies Name</span>
                        </div>

                        <div className='setting_icon'>
                            <div>
                                <SettingMenu />
                            </div>
                            <div> <ShareModel videoUrl={videoUrl} /></div>
                            <div onClick={() => { setPlaying(false); hidePopup(); countinueWatching() }}> < CloseIcon /> </div>
                        </div>

                    </div>
                    {/* //brightness */}
                    <div className='hide' >
                        <div className='input_vertical hide-item '>
                            <Brightness5Icon fontSize='large' />
                            <div className='brightness_input'>
                                <input
                                    type="range"
                                    min={0}
                                    max={2}
                                    step={0.1}
                                    value={brightness}
                                    orient="vertical"
                                    onChange={handleBrightnessChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='video_player_second'>
                    <ReactPlayer
                        url={videoUrl}
                        controls={false} // Show video controls
                        ref={playerRef}
                        config={{
                            file: {
                                tracks: subtitlesEnabled ? tracks : [], // Include or exclude tracks based on the subtitlesEnabled state
                            },
                        }}
                        playing={playing}
                        volume={volume}
                        muted={muted}
                        style={videoStyle}
                        width="100%"
                        height={"auto"}
                        quality={selectedQuality}
                        playbackRate={playbackRate}
                        light={movies_poster}
                        onProgress={({ played }) => {
                            // Update the played state while the video is playing
                            if (!isSeeking) {
                                setPlayed(played);
                            }
                        }}
                        onPlay={() => setIsFullScreen(false)}

                    />
                </div >

                <div className='video_player_third' >
                    <div className='rangecolor'>
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={played}
                            onChange={handleSeekChange}
                            onMouseDown={handleSeekMouseDown}
                            onMouseUp={handleSeekMouseUp}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                        <div className='volume_main'>
                            <div className='volume_muted' onClick={toggleMute}>
                                {muted ? <VolumeOffIcon className='volume' fontSize='large' /> : <VolumeMuteIcon className='volume' fontSize='large' />}
                            </div >
                            <div className='volume_input'>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    value={volume}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>

                        <div className='video_palyer_control'>
                            <div style={{ alignSelf: 'center' }}> {formatTime(currentTime)} </div>
                            <div onClick={handleBackward}><Replay10Icon fontSize='large' /></div>
                            <div onClick={togglePlayPause}>
                                {playing ? < PauseIcon fontSize='large' /> : <PlayArrowIcon fontSize='large' />}
                            </div>
                            <div onClick={handleForward}><Forward10Icon fontSize='large' /></div>
                            {duration ? duration[0] : ''}
                            <div style={{ alignSelf: 'center' }}>{formatTime(duration)} </div>
                        </div>

                        <div className='video_cap_control'>
                            <div><SensorsIcon fontSize='large' /></div>
                            <div onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}>
                                {subtitlesEnabled ? <ClosedCaptionOffIcon fontSize='large' /> : <ClosedCaptionOffIcon fontSize='large' />}
                            </div>
                            <div className="custom-controls">
                                <div onClick={toggleFullScreen}>
                                    {isFullScreen ? <FullscreenExitIcon fontSize='large' /> : <FullscreenIcon fontSize='large' />}
                                </div>
                            </div>
                            <div className='video_player_downlod_menu'><DownloadMenu /></div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default VideoPlayer;
