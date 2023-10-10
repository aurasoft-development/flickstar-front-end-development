import React from 'react'
import '../../assets/css/ChoosePlan.css'
import { Button, Radio } from '@mui/material';
import { orange } from '@mui/material/colors';
import Frame from '../../assets/images/choose_plan/Frame.png'
import { useNavigate } from 'react-router-dom'

const SecondPlan = () => {
  const [selectedValue, setSelectedValue] = React.useState();
  const navigate = useNavigate()

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div className='choose_plan_container'>
      <div className='choose_plan_wrapper'>
        <div className='choose_div_first'>
          <span className='choose_div_first_span1'>Welcome to flickstar</span>
          <p className='choose_p'>Select your magic plan</p>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>Ad-Lite* Access to Premium Shows &Movies</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span' >Download Shows & Movies**</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>Watch on 3 screens parallelly</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span_1'>Exclusive access to Premium Shows & Movies</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>Ad-Lite experience on Local Tab***</span>
          </div>
          <p className='choose_img_p'>* Some titles may contain ads even after subscribing.** Download feature on some titles may be disabledpertaining to rights.*** Only available on Android</p>
        </div>
        <div className='choose_div_second'>
          <div><span className='choose_second_span1'>Choose Plan</span></div>
          <div className='choose_second_div'><span>Subscription will be linked to </span> <p className='choose_sec_color'>flickstar@gmail.com</p></div>
          <div className='choose_second_img_div'>
            <Radio
              {...controlProps('a')}
              sx={{
                color: orange[900],
                '&.Mui-checked': {
                  color: orange[900],
                },
              }}
            />
            <div className='choose_second_div_inside'>
              <span className='choose_second_inside_span'>Starter</span>
              <span className='choose_second_inside_span1'>For the new marketer on a budget whojust wants
                basic tracking...</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>$37 / year</span>
              <span className='choose_second_span_year1'>$50 / year</span>
            </div>
          </div>
          <div className='choose_second_img_div'>
            <Radio
              {...controlProps('b')}
              sx={{
                color: orange[900],
                '&.Mui-checked': {
                  color: orange[900],
                },
              }}
            />
            <div className='choose_second_div_inside'>
              <span className='choose_second_inside_span'>standard</span>
              <span className='choose_second_inside_span1'>For the new marketer on a budget whojust wants
                basic tracking...</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>$37 / year</span>
              <span className='choose_second_span_year1'>$50 / year</span>
            </div>
          </div>
          <div className='choose_second_img_div'>
            <Radio
              {...controlProps('c')}
              sx={{
                color: orange[900],
                '&.Mui-checked': {
                  color: orange[900],
                },
              }}
            />
            <div className='choose_second_div_inside'>
              <span className='choose_second_inside_span'>pro</span>
              <span className='choose_second_inside_span1'> For the new marketer on a budget whojust wants
                basic tracking...</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>$37 / year</span>
              <span className='choose_second_span_year1'>$50 / year</span>
            </div>
          </div>
          <div><Button className='choose_button' sx={{ textTransform: "none" }} onClick={() => navigate('/movies')}>Buy Now</Button></div>
        </div>
      </div>
    </div>
  )
}

export default SecondPlan