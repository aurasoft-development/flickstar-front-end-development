import React from 'react'
import '../../assets/css/Home.css'
import Group_6 from '../../assets/images/home/Group_6.png';
import Asset_home from '../../assets/images/home/Asset_home.png'
import arrow_down from '../../assets/images/home/arrow-down.png'
import { useTranslation } from 'react-i18next';
const SectionSec = () => {
    const { t } = useTranslation();
    return (
        <div className='section_sec_container'>
        <div className='section_sec_first'>
            <h2 className='section_sec_h2'>{t('ALL_THE_TV_YOU_LOVE')}</h2>
            <span className='section_sec_span'>{t('LOREM_IPSUM_SIMPLE_DUMMY')}</span>
            <div className='section_div_img'>
                <img src={Group_6} width={'100%'} height={'100%'} />
                <img src={Asset_home}  height={392} />
            </div>
        </div>
        <div className='section_sec_second'>
            <h2 className='section_second_h2 h2'>{t('LIVE_TV_MAKES_IT_BETTER')}</h2>
            <span className='section_second_span1'>{t('LOREM_IPSUM_INDUSTRY_DUMMY')}</span>
            <span className='section_second_span2'>{t('REGIONAL_RESTRICTIONS_LIVE_TV_TERMS')}</span>
            <div><img src={arrow_down} width={37} height={36} /></div>
        </div>
        </div>
    )
}

export default SectionSec