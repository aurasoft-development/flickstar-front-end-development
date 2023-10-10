import React, { useState } from 'react'
import '../../assets/css/FlickstarDetails.css'
import slider from '../../assets/images/flickstar_details_page/slider.png'
import info from '../../assets/images/flickstar_details_page/info.png'
import info_1 from '../../assets/images/flickstar_details_page/info_1.png'
import info_2 from '../../assets/images/flickstar_details_page/info_2.png'
import plus from '../../assets/images/flickstar_details_page/plus.png'
import play from '../../assets/images/flickstar_page/play.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import video from '../../assets/video/video_medium.mp4'
import VideoPlayer from '../../component/videoplayer/VideoPlayer.jsx'


const View = () => {
    const [show, setShow] = useState(false);
    // const audioTrack = [
    //     {
    //         lable: "video player testing",
    //         src: 'www.video_player.com'
    //     },
    //     {
    //         lable: "video player testing1",
    //         src: 'www.video_player.com1'
    //     }
    // ]
    const navigate = useNavigate()
    return (
        <div>
            <div className='flickstar_details_container' >
                <div className='flickstar_details_sec_first p-l'>
                    <h1 className='flickstar_details_h1'>The Lair</h1>
                    <div className='flickstar_details_span_main'>
                        <span className='carousel_span'>2023</span>
                        <span className='carousel_span back_color'>12+</span>
                        <span className='carousel_span b_left '>1 hour 15min</span>
                        <span className='carousel_span'>Action</span>
                    </div>
                    <span className='carousel_span1'>Shot down over one of the most dangerous rebel strongholds in Afghanistan, a Royal Air Force pilot discovers an abandoned Soviet Research Facility concealed in the remote hills. She finds refuge in an underground bunker where deadly man-made biological weapons</span>
                    <div className='carousel_div_botton custom_button'>
                        <Button className='carousel_button'>
                            <img src={play} width={21} height={18} />
                            <span onClick={() => setShow(true)}>Continue Watching</span>
                        </Button>
                        <div className='carousel_icon_image' ><img src={plus} width={24} height={23} /> </div>
                        <div className='carousel_icon_image' ><img src={info_1} width={24} height={23} /> </div>
                        <div className='carousel_icon_image' ><img src={info} width={24} height={23} /> </div>
                        <div className='carousel_icon_image' ><img src={info_2} width={24} height={23} /> </div>
                    </div>
                </div>
                <div className='flickstar_details_div_img' >
                    <img src={slider} width={'100%'} height={'100%'} />
                </div>
            </div>
            <VideoPlayer
                show={show}
                setShow={setShow}
                videoUrl={video}
                subtitles={"hello"}
            // audioTracks={audioTrack}
            />
        </div>
    )
}

export default View