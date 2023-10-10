import React from 'react'
import '../../assets/css/Home.css'
import greator_icon from '../../assets/images/greator_icon.png'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const SectionOne = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
  return (
    <div className='home_main'>
      <div className='home_section'>
        <h1 className='home_sec_heading'>{t('STREAMING_MOVIES_TV_SHOW_KIDS')}</h1>
        <span className='home_sec_text'>{t('FIND_POPULAR_UPCOMING_ENTERTAINMENT')}</span>
        <div className='home_sec_btn'>
          <Button className='home_sec_btn_one btn_color' >{t('GET_STARTED')}<img src={greator_icon} /></Button>
          <Button className='home_sec_btn_one btn_color_one' onClick={()=>navigate('/login')} >{t('SIGN_IN')}<img src={greator_icon} /></Button>
        </div>
      </div>
    </div>
  )
}

export default SectionOne