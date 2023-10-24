import React from 'react'
import '../../assets/css/ChoosePlan.css'
import { Button, Radio } from '@mui/material';
import { orange } from '@mui/material/colors';
import Frame from '../../assets/images/choose_plan/Frame.png'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  return (
    <div className='choose_plan_container'>
      <div className='choose_plan_wrapper'>
        <div className='choose_div_first'>
          <span className='choose_div_first_span1'>{t("WELCOME_TO_FLICKSTAR")}</span>
          <p className='choose_p'>{t("SELECT_YOUT_MAGIC_PLAN")}</p>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>{t('AD_LITE_ACCESS_PREMIUM')}</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span' >{t('DOWNLOAD_SHOWS')}</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>{t('WATCH_ON_3_SCREENS')}</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span_1'>{t('EXCLUSIVE_ACCESS_TO_PREMIUM')}</span>
          </div>
          <div className='choose_img_div'>
            <img src={Frame} width={35} height={35} />
            <span className='choose_img_span'>{t('AD_LITE_EXPRIENCE_ON_LOCAL')}</span>
          </div>
          <p className='choose_img_p'>{t('SOME_TITLES_MAY_CONTAIN')}</p>
        </div>
        <div className='choose_div_second'>
          <div><span className='choose_second_span1'>{t('CHOOSE_PLAN')}</span></div>
          <div className='choose_second_div'><span>{t('SUBCRIPTION_WILL_BE_LINKED')}</span> <p className='choose_sec_color'>{t('FILCKSTAR_GMAIL')}</p></div>
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
              <span className='choose_second_inside_span'>{t('STARTER')}</span>
              <span className='choose_second_inside_span1'>{t('BASIC_TRACKING')}</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>{t('37_YEAR')}</span>
              <span className='choose_second_span_year1'>{t('50_YEAR')}</span>
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
              <span className='choose_second_inside_span'>{t('STANDARD')}</span>
              <span className='choose_second_inside_span1'>{t('BASIC_TACKING_1')}</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>{t('37_YEAR_1')}</span>
              <span className='choose_second_span_year1'>{t('50_YEAR_1')}</span>
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
              <span className='choose_second_inside_span'>{t('PRO')}</span>
              <span className='choose_second_inside_span1'> {t('BASIC_TACKING_2')}</span>
            </div>
            <div className='choose_second_div_inside'>
              <span className='choose_second_span_year'>{t('37_YEAR_2')}</span>
              <span className='choose_second_span_year1'>{t('50_YEAR_2')}</span>
            </div>
          </div>
          <div><Button className='choose_button' sx={{ textTransform: "none" }} onClick={() => navigate('/movies')}>{t('BUY_NOW')}</Button></div>
        </div>
      </div>
    </div>
  )
}

export default SecondPlan