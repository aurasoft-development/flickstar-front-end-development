import { Button, Input } from '@mui/material'
import React from 'react'
import '../../assets/css/Otp.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useRef, useState } from "react";
import { toast } from 'react-toastify'
const Otp = () => {
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const otpFieldsRef = useRef([]);
    const navigate = useNavigate()
    const { t } = useTranslation();

    const handleInput = (index, value) => {
        if (value.length > 1) {
            return;
        }
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
        if (value.length === 1 && index < otpValues.length - 1) {
            otpFieldsRef.current[index + 1].focus();
        }
    };

    const handleBackspace = (index) => {
        if (otpValues[index] !== '') {
            const newOtpValues = [...otpValues];
            newOtpValues[index] = '';
            setOtpValues(newOtpValues);
        } else if (index > 0) {
            otpFieldsRef.current[index - 1].focus();
        }
    };

    // console.log("otp-->",otpValues)
    const handleSubmit = () => {

        if (otpValues && otpValues[0] === '' || otpValues[1] === '' || otpValues[2] === '' || otpValues[3] === '') {
            toast.warn('Please Enter Otp')

        }
        else{
            toast.success('Otp Submit successfully')
            navigate('/reset_password')
        }
    }

    return (
        <div className='forgot_container main'>
            <div className='forgot_wrapper'>
                <div className='forgot_inner_div'>
                    <h1>{t('VERIFICATION_CODE')}</h1>
                    <span className='forgot_span'>{t('OTP_ENTER_CONNECTED_EMAIL')}</span>
                    <div className="otp-container">
                        {otpValues.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                maxLength="1"
                                placeholder='0'
                                className="otp-input"
                                value={value}
                                onChange={(e) => handleInput(index, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace') {
                                        handleBackspace(index);
                                    }
                                }}
                                ref={(ref) => {
                                    otpFieldsRef.current[index] = ref;
                                }}
                            />
                        ))}
                    </div>
                    <Button className='login_button' variant="contained" fullWidth type='submit' sx={{ textTransform: "none" }} onClick={() => handleSubmit()} >
                        {t('OTP_GET_STARTED')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Otp;