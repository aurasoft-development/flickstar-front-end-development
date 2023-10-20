import React, { useEffect, useMemo, useState } from 'react';
import { Button, Container, InputAdornment, FormControl, IconButton } from '@mui/material';
import Input from '@mui/material/Input';
import fluent_eye from '../../assets/images/fluent_eye.png'
import Validation from '../../utils/Validation';
import '../../assets/css/Register.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Register = () => {
    const [formErrors, setFormErrors] = useState({})
    const initialValues = useMemo(() => {
        return {
            email_or_phone: "",
            new_password: "",
            confirm_password: "",
        }
    }, [])
    const [formValues, setFormValues] = useState(initialValues)
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleValidation = (event) => {
        event.preventDefault();
        setFormErrors(Validation(formValues))
    }
    const { t } = useTranslation()

    return (
        <div className='main'>
            <Container width='100%'>
                <div className='wrapper'>
                    <div className='skipBtn' onClick={() => navigate('/movies')}>{t('SKIP_FOR_NOW')}</div>
                    <div className='div_section_main' >
                        <h2 className='login_heading'>{t('REGISTER')}</h2>
                        <span className='login_plan_text'>{t('FLICKSTAR_FEATURES_BENEFITS')}</span>
                        <form className='login_form' onSubmit={handleValidation} >
                            <div className='form_div_main'>
                                <Input
                                    className='form_input'
                                    placeholder={t('EMAIL_OR_PHONE_NUMBER')}
                                    name='email_or_phone'
                                    value={formValues.email_or_phone}
                                    onChange={handleChange}
                                />
                                <span className={formErrors.email_or_phone ? "errorMessageTrue" : "cs2"}>{t('ENTER_VALID_EMAIL_OR_PHONE')}</span>
                            </div>
                            <div className='form_div_main'>
                                <FormControl variant="standard">
                                    <Input
                                        className='form_input'
                                        placeholder={t('NEW_PASSWORD')}
                                        type={showPassword ? 'text' : 'password'}
                                        name='new_password'
                                        value={formValues.new_password}
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
                                <span className={formErrors.new_password ? "errorMessageTrue" : "cs2"}>{t('PASSWORD_MUST_4TO60_CAR')} </span>
                            </div>
                            <div className='form_div_main'>
                                <FormControl variant="standard">
                                    <Input
                                        className='form_input'
                                        placeholder={t('CONFIRM_PASSWORD')}
                                        type={showPassword ? 'text' : 'password'}
                                        name='confirm_password'
                                        value={formValues.confirm_password}
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
                                <span className={formErrors.confirm_password ? "errorMessageTrue" : "cs2"}>{t('PASSWORD_MUST_4TO60_CAR')} </span>
                            </div>
                            <Button className='login_button' variant="contained" fullWidth type='submit' sx={{ textTransform: "none" }} >
                                {t('CONTINUE')}
                            </Button>

                        </form>
                        <div className='page_redirect'>
                            <span>{t('NEW_TO_FLICKSTAR')} <u className='cursor_pointer' onClick={() => navigate('/login')}>{t('SIGN_IN_NOW')}</u></span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;
