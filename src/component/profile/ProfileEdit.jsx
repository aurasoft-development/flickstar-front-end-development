import React from 'react';
import { Button } from '@mui/material'
import '../../assets/css/Profile/ProfileEdit.css'
import { useSelector } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'

const ProfileEdit = () => {
  const data = useSelector((state) => {
    return state.profile;
  })
  const navigate = useNavigate()
  return (
    <div className='profile_model_container'>
      <h1>Edit Profile</h1>
      <div className='profile_div_main'>
        <div className='test edit'>
          <div className='icons'> <EditIcon fontSize='large' /> </div>
          <img src={data.img} width={148} height={148} className='profile_edit_img' />
        </div>
        <input className='profile_input' type='text' color='white' defaultValue={data.name} />
      </div>
      <div className='profile_second_div'>
        <span className='profile_button_save' onClick={() => navigate('/edit_manage_profile')}>Save</span>
        <span className='profile_button_save' onClick={() => navigate('/edit_manage_profile')}>Cancel</span>
        <span className='profile_button_save'>Delete Profile</span>
      </div>
    </div>
  )
}

export default ProfileEdit