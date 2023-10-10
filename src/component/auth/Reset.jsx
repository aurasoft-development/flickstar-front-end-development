import { Button, Input } from '@mui/material'
import React, { useState } from 'react'
import '../../assets/css/Reset.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
const Reset = () => {
    const [new_password, setNew_Password] = useState();
    const [confirm_password, setConfirm_Password] = useState();
    const navigate = useNavigate()
    const { t } = useTranslation();
    const handleSubmit = () => {
        if (!new_password || !confirm_password) {
            toast.warn("Fields are required")
        }
        else {
            toast.success(`${t('PASSWORD_RESET_SUCCESSFULLY')}`)
            navigate('/login')
        }
    }
    return (
        <div className='reset_container main'>
            <div className='reset_wrapper'>
                <div className='forgot_inner_div'>
                    <h1>{t('RESET_PASSWORD')}</h1>
                    <span className='forgot_span'>{t('RESET_ENTER_CONNECTED_EMAIL')}</span>
                    <div> <Input
                        className='forgot_input'
                        placeholder={t('RESET_NEW_PASSWORD')}
                        value={new_password}
                        onChange={(e) => setNew_Password(e.target.value)}
                    />
                    </div>
                    <div> <Input
                        className='forgot_input'
                        placeholder={t('RESET_CONFIRM_PASSWORD')}
                        value={confirm_password}
                        onChange={(e) => setConfirm_Password(e.target.value)}
                    />
                    </div>
                    <Button className='login_button' variant="contained" fullWidth type='submit' sx={{ textTransform: "none" }} onClick={handleSubmit} >
                        {t('RESET_BUTTON_CONTINUE')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Reset