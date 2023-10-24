import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import check_icon from '../../assets/images/choose_plan/check_icon.png'
import { Button } from 'semantic-ui-react';
import '../../assets/css/ChoosePlan.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FirstPlan = () => {
    const navigate = useNavigate();

    const options = {
        loop: true,
        items: 1,
        autoplay: true,
    };
    const { t } = useTranslation();
    return (
        <div className='first_plan_wrapper'>
            <OwlCarousel className="owl-theme" {...options}>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>{t('STEP_1')}</span>
                    <span className='first_plan_span1'>{t('BINGE_WATCH')}</span>
                    <span className='first_plan_span2'>{t('ALL_EPISODES')}</span>
                </div>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>{t('STEP_2')}</span>
                    <span className='first_plan_span1'>{t('DOWNLOAD_1')}</span>
                    <span className='first_plan_span2'>{t('WATCH_ALL')}</span>
                </div>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>{t('STEP_3')}</span>
                    <span className='first_plan_span1'>{t('SHERE')}</span>
                    <span className='first_plan_span2'>{t('ACCESS_ON_5_DEVICES')}</span>
                </div>
            </OwlCarousel>
            <div className='first_plan_button'>
                <Button onClick={() => navigate('/plan')} >{t('NEXT')}</Button>
            </div>
        </div>
    )
}

export default FirstPlan