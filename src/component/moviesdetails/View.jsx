import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'



const View = () => {
    const [show, setShow] = useState(false);
    const [val, setVal] = useState(3);
    const navigate = useNavigate()
    const data = useSelector((state) => state.range.slice(-1))
    const { t } = useTranslation();
    return (
        <div>
            <div className='flickstar_details_container' >
                <div className='flickstar_details_sec_first p-l'>
                    <h1 className='flickstar_details_h1'>{t('THE_LAIR')}</h1>
                    <div className='flickstar_details_span_main'>
                        <span className='carousel_span'>{t('2023_1')}</span>
                        <span className='carousel_span back_color'>{t('12+_1')}</span>
                        <span className='carousel_span b_left '>{t('MOVIES_TIME_1')}</span>
                        <span className='carousel_span'>{t('ACTION_1')}</span>
                    </div>
                    <span className='carousel_span1'>{t('SHOT_DOWN_OVER')}</span>
                    <div className='carousel_div_botton custom_button'>
                        <Button className='carousel_button'>
                            <img src={play} width={21} height={18} />
                            <div className='countinue_range'>
                                <span onClick={() => setShow(true)}>{t('CONTINUE_WATCHING_1')}</span>
                                <input type='range' min={0} max={1} step="any"
                                    value={data[0] > 0 ? data[0] : 0}
                                />
                            </div>
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
            // videoUrl={video}
            // subtitles={"hello"}
            />
        </div>
    )
}

export default View