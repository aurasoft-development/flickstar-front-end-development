import React, { useEffect, useMemo, useState } from 'react';
import { Button, Container, InputAdornment, FormControl, IconButton } from '@mui/material';
import Input from '@mui/material/Input';
import '../../assets/css/Login.css'
import Facebook from '../../assets/images/Facebook.png'
import Google from '../../assets/images/Google.png'
import fluent_eye from '../../assets/images/fluent_eye.png'
import Validation from '../../utils/Validation';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { loginAuth } from '../../features/auth/LoginSlice';

const Login = () => {
    const [formErrors, setFormErrors] = useState({})
    const initialValues = useMemo(() => {
        return {
            email_or_phone: "",
            password: "",
        }
    }, [])
    const [formValues, setFormValues] = useState(initialValues)
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleValidation = (event) => {
        event.preventDefault();
        setFormErrors(Validation(formValues))
    }

    const { t } = useTranslation();


    const handleSubmitData = () => {
        const { email_or_phone, password } = formValues;
        if (!email_or_phone || !password) {
            toast.warn(`${t('PLEASE_FILL_THE_FIELDS')}`)
        }
        else {
            toast.success(`${t('LOGIN_DONE')}`)
            localStorage.setItem('user_login', 'true')
            dispatch(loginAuth())
            navigate('/choose_plan');
        }
    }

    return (
        <div className='main'>
            <Container width='100%' >
                <div className='wrapper'>
                    <div className='skipBtn cursor_pointer' onClick={() => navigate('/movies')} >{t('login_skip_button')}</div>
                    <div className='div_section_main' >
                        <h2 className='login_heading'>{t('LOGIN')}</h2>
                        <span className='login_plan_text'>{t('FEATURES_AND_BENEFITS')}</span>
                        <form autoComplete='off' onSubmit={handleValidation} className='login_form' >
                            <div className='form_div_main'>
                                <Input
                                    autoComplete="off"
                                    className='form_input'
                                    placeholder={t('EMAIL_OR_PHONE_NUMBER')}
                                    name='email_or_phone'
                                    value={formValues.email_or_phone}
                                    onChange={handleChange}
                                />
                                <span className={formErrors.email_or_phone ? "errorMessageTrue" : "cs2"}>{t('ENTER_VALID_EMAIL_OR_PHONE')} </span>
                            </div>
                            <div className='form_div_main'>
                                <FormControl variant="standard">
                                    <Input
                                        className='form_input'
                                        placeholder={t('PASSWORD')}
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={formValues.password}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => handleClickShowPassword()}>
                                                    <img src={fluent_eye} width={20} height={13} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <div style={{ display: 'flex' }}> <span className={formErrors.password ? "errorMessageTrue" : "cs2"}>{t('PASSWORD_MUST_4_TO_60')} </span>
                                    <span className='login_forget' onClick={() => navigate('/forgot_password')}>{t('FORGOT_PASSWORD')}</span>
                                </div>
                            </div>
                            <Button className='login_button' variant="contained" fullWidth type='submit' sx={{ textTransform: "none" }}
                                onClick={() => handleSubmitData()}
                            >
                                {t('CONTINUE')}
                            </Button>
                        </form>
                        <div className='form_div_main login_form_sec'>
                            <span className='social_text'>{t('SIGN_IN_SOCIAL_ACCOUNT')}</span>
                            <div className='social_media ' >
                                <div className='social_media_login cursor_pointer'>
                                    <img src={Google} width={36} height={36} backgroundColor={"#818181"} />
                                    <span>{t('CONTINUE_WITH_GOOGLE')}</span>
                                </div>
                                <div className='social_media_login cursor_pointer' >
                                    <img src={Facebook} width={36} height={36} />
                                    <span>{t('CONTINUE_WITH_FACEBOOK')}</span>
                                </div>
                            </div>
                        </div>
                        <div className='page_redirect'>
                            <span>{t('NEW_TO_FLICKSTAR')} <u className='cursor_pointer' onClick={() => navigate('/register')}>{t('SING_UP_NOW')}</u></span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
