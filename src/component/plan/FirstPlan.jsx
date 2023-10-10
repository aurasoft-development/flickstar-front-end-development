import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import check_icon from '../../assets/images/choose_plan/check_icon.png'
import { Button } from 'semantic-ui-react';
import '../../assets/css/ChoosePlan.css'
import { useNavigate } from 'react-router-dom';

const FirstPlan = () => {
    const navigate = useNavigate();

    const options = {
        loop: true,
        items: 1,
        autoplay: true,
    };
    return (
        <div className='first_plan_wrapper'>
            <OwlCarousel className="owl-theme" {...options}>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>STEP 1 OF 3</span>
                    <span className='first_plan_span1'>BINGE WATCH</span>
                    <span className='first_plan_span2'>All episodes without any limits</span>
                </div>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>STEP 2 OF 3</span>
                    <span className='first_plan_span1'>BINGE WATCH</span>
                    <span className='first_plan_span2'>All episodes without any limits</span>
                </div>
                <div className='fist_plan_div first_img'>
                    <img src={check_icon} />
                    <span className='first_plan_span'>STEP 3 OF 3</span>
                    <span className='first_plan_span1'>BINGE WATCH</span>
                    <span className='first_plan_span2'>All episodes without any limits</span>
                </div>
            </OwlCarousel>
            <div className='first_plan_button'>
                <Button onClick={() => navigate('/plan')} >Next</Button>
            </div>
        </div>
    )
}

export default FirstPlan