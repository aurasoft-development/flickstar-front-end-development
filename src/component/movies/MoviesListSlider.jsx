import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo_image from '../../assets/images/flickstar_page/logo_image.png'
import play from '../../assets/images/flickstar_page/play.png'
import info from '../../assets/images/flickstar_page/info.png'
import plus from '../../assets/images/flickstar_page/plus.png'
import slider_image from '../../assets/images/flickstar_page/slider_image.png'
import '../../assets/css/Carousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
  {
    imgPath: slider_image
  },
  {
    imgPath: slider_image
  },
  {
    imgPath: slider_image
  },
  {
    imgPath: slider_image
  },
  {
    imgPath: slider_image
  },
  {
    imgPath: slider_image
  },
];

const MoviesListSlider = () => {
  const options = {
    loop: true,
    items: 1,
    autoplay: true,
    nav: true,
    swipeable: true
  };
  return (
    <Box className="box_main ">
      <OwlCarousel className="owl-theme" {...options}>
        {images.map((step, index) => (
          <div className='carousel_img w-100 ' key={index}>
            <div className='carousel_div_main p-l wel_img'>
              <div className='carousel_logo'>
                <img src={logo_image} width={229} height={142} />
              </div>
              <div className='carousel_span_main'>
                <span className='carousel_span'>2023</span>
                <span className='carousel_span back_color'>12+</span>
                <span className='carousel_span b_left '>1 hour 15min</span>
                <span className='carousel_span'>Action</span>
              </div>
              <span className='carousel_span1'>Barney assembles a new and younger team to capture Stonebanks, a
                co-founder of the Expendables. However, Stonebanks ends up capturing the new team and challenges an escaped Barney to save them.</span>
              <div className='carousel_div_botton custom_button_1 '>
                <Button className='carousel_button'>
                  <img src={play} width={21} height={18} />
                  <span>watch</span>
                </Button>
                <div className='carousel_icon_image' ><img src={plus} width={24} height={23} /> </div>
                <div className='carousel_icon_image' ><img src={info} width={24} height={23} /> </div>
              </div>
            </div>
            <div className='carousel_div_img' >
              <img src={step.imgPath} width={'100%'} height={'100%'} />
            </div>
          </div>
        ))}
      </OwlCarousel>

    </Box>
  );
}

export default MoviesListSlider;