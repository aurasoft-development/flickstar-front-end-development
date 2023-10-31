import React from 'react';
import '../../assets/css/Profile/ProfileEdit.css'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ProfileEdit = () => {
  const data = useSelector((state) => {
    return state.profile;
  })
  const [imageUrl, setImageUrl] = useState(data.img);
  const navigate = useNavigate()
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
    <div className='profile_model_container'>
      <h1>{t('EDIT_PROFILE')}</h1>
      <div className='profile_div_main'>
        <div className='test edit'>
          <div className="p_parent" >
            <div className="p_file-upload">
              <div className='icons'> <EditIcon fontSize='large' /> </div>
              <img src={imageUrl} width={150} height={150} alt="upload" />
              <input
                accept="image/*"
                type="file"
                id="imgInp"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <input className='profile_input' type='text' color='white' defaultValue={data.name} />
      </div>
      <div className='profile_second_div'>
        <span className='profile_button_save cursor_pointer' onClick={() => navigate('/edit_manage_profile')}>{t('SAVE')}</span>
        <span className='profile_button_save cursor_pointer' onClick={() => navigate('/edit_manage_profile')}>{t('CENCEL')}</span>
        <span className='profile_button_save cursor_pointer'>{t('DELETE_PROFILE')}</span>
      </div>



    </div>
  )
}

export default ProfileEdit