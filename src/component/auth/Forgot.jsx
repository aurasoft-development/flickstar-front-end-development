import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import '../../assets/css/Forgot.css'
import {useNavigate} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Forgot = () => {
    const [values, setValues] = useState()
    const navigate= useNavigate();
    const { t } = useTranslation();
    const handleSubmit = () => {
        if (!values) {
            toast.warn(`${t('EMAIL_OR_PHONE_REQUIRED')}`)
        }
        else {
            toast.success(`${t('SEND_OTP_SUCCESS')}`)
            navigate('/otp_verify')
        }
    }

    return (
        <div className='forgot_container main'>
            <div className='forgot_wrapper'>
                <div className='forgot_inner_div'>
                    <h1>{t('FORGOT_PASSWORD')}</h1>
                    <span className='forgot_span'>{t('ENTER_CONNECTED_EMAIL')}</span>
                    <div> <Input
                        className='forgot_input'
                        placeholder={t('FORGOT_EMAIL_OR_PHONE')}
                        name='email_or_phone'
                        value={values}
                        onChange={(e) => setValues(e.target.value)}
                    />
                    </div>
                    <Button className='login_button' variant="contained" fullWidth type='submit' sx={{ textTransform: "none" }} onClick={handleSubmit} >
                        {t('FORGOT_BUTTON_EMAIL_PHONE')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Forgot