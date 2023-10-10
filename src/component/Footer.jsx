import { Button, Divider, Input, InputAdornment } from '@mui/material'
import React from 'react'
import greator_icon from '../assets/images/greator_icon.png'
import icon_flickstar from '../assets/images/icon_flickstar.png'
import mdi_fb from '../assets/images/footer/mdi_fb.png'
import mdi_instagram from '../assets/images/footer/mdi_instagram.png'
import mdi_youtube from '../assets/images/footer/mdi_youtube.png'
import ri_twitter_fill from '../assets/images/footer/ri_twitter-fill.png'
import '../assets/css/Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='footer_section'>
      <div className='footer_sec_main'>
        <span className='footer_text'>{t('INPUT_YOUR_EMAIL')}</span>
        <Input
          className='footer_input'
          placeholder='email address'
          name='confirm_password'
          endAdornment={
            <InputAdornment position="end">
              <Button id='footer_btn_dev'> {t('GET_STARTED')} <img src={greator_icon} />  </Button>
            </InputAdornment>
          }
        />
      </div>
      <Divider backgroundColor='green' light />
      <div className='footer_color footer_d_row p-r p-l'>
        <div className='footer_d_flex footer_div_main footer_div_span'>
          <h2 className='footer_div_h2'>{t('COMPANY')}</h2>
          <span>{t('ABOUT_US')}</span>
          <span>{t('CORPORATE')}</span>
          <span>{t('INVESTOR_RELATIONS')}</span>
          <span className='footer_div_span'>{t('FLICKSTAR_BLOG')}</span>
        </div>
        <div className='footer_d_flex footer_div_sec footer_position2 footer_div_span'>
          <h2 className='footer_div_h2'>{t('CUSTOMER')}</h2>
          <span >{t('FAQ')}</span>
          <span >{t('MEDIA_CENTRE')}</span>
          <span >{t('WAYS_TO_WATCH')}</span>
        </div>
        <div className='footer_d_flex footer_position3 footer_div_span'>
          <h2 className='footer_div_h2'>{t('CONNECT')}</h2>
          <span>{t('CONTACT_US')}</span>
          <span>{t('CAREERS')}</span>
        </div>
        <div className='footer_d_flex footer_position4 footer_div_span'>
          <h2 className='footer_div_h2'>{t('TOP_FLICKSTAR_SHOWS')}</h2>
          <span >{t('THE_WITCHER')}</span>
          <span >{t('SECRET_INVASION(TV-14)')}</span>
          <span >{t('HIJACK_(TV-MA)')}</span>
          <span >{t('THE_LAST_OF_US_(TV-MA)')}</span>
          <span >{t('THE_BLACKLIST_SEASON_10')}</span>
          <span >{t('THE_CROWDED_ROOM')}</span>
          <span >{t('TWISTED_METAL')}</span>
        </div>
        <div className='footer_d_flex footer_position'>
          <img src={icon_flickstar} width={161.92} height={44.08} />
          <p className='footer_para footer_div_span'>{t('FLICKSTAR_ONE_STOP_DESTINATION')}</p>
        </div>
      </div>
      <Divider light />
      <div className='footer_section3 p-l'>
        <div className='footer_section3_div footer_img_width'>
          <div><img className='footer_img_width' src={mdi_fb} width={10.05} height={20} /></div>
          <div><img className='footer_img_width' src={mdi_instagram} width={20} height={20} /></div>
          <div><img className='footer_img_width' src={ri_twitter_fill} width={20.38} height={16.57} /></div>
          <div><img className='footer_img_width' src={mdi_youtube} width={20} height={14} /></div>
        </div>
        <div className='footer_section3_div1 footer_div1_span'>
          <span>{t('@_2023_FLICKSTAR_LLC')}</span>
          <span>{t('SUBSCRIBER_AGREEMENT')}</span>
          <span>{t('PRIVACY_POLICY')}</span>
          <span>{t('PERSONAL_INFORMATION')}</span>
          <span>{t('TV_PARENTAL_GUIDELINES')}</span>
          <span>{t('SITEMAP')}</span>
        </div>
      </div>

    </div>
  )
}

export default Footer