import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import plus from '../../assets/images/manage_profile/plus.png'
import ceamra from '../../assets/images/manage_profile/ceamra.png'
import add_profile from '../../assets/images/manage_profile/add_profile.jpg'

import '../../assets/css/Profile/AddProfileModel.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    boxShadow: 24,
    p: 4,
    border: '2px solid tomato',
    borderRadius: '8px'
};



export default function AddProfileModel() {
    const [open, setOpen] = React.useState(false);
    const [imageUrl, setImageUrl] = useState(add_profile);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();


    const { t } = useTranslation()

    // image show functionality
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const objectURL = URL.createObjectURL(file);
            setImageUrl(objectURL);
        }
    };


    return (
        <div>
            <Button onClick={handleOpen}>
                <img className='m_p_second_img' src={plus} width={45.48} height={43.58} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='box'>
                    <div className='close_icon cursor_pointer' onClick={() => handleClose()}><CloseIcon /></div>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: 'black' }}>
                        {t('ADD_NEW_PROFILE')}
                    </Typography>
                    <div className='input_box'>
                        <div className='file-upload-main'>
                            <div className='file-upload-image'>
                                <img id="blah" src={imageUrl} alt="your image" width={'100%'} height={'100%'} />
                            </div>
                            <div className="app">
                                <div className="parent" >
                                    <div className="file-upload">
                                        <img src={ceamra} width={45.48} height={43.58} alt="upload" />
                                        <h3>{t('CLICK_BOX_TO_UPLOAD')}</h3>
                                        <input
                                            accept="image/*"
                                            type="file"
                                            id="imgInp"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box_place'>
                            <input type='text' placeholder={t('ENTER_YOUR_NAME')} />
                        </div>
                    </div>
                    <div className='add_profile_model_btn'> <Button onClick={() => { navigate('/manage_profile'); handleClose() }}>{t('ADD_PROFILE')}</Button> </div>
                </Box>
            </Modal>
        </div>
    );
}