import React from 'react'
import plus from '../../assets/images/manage_profile/plus.png'
import Group from '../../assets/images/manage_profile/Group.png'
import Group1 from '../../assets/images/manage_profile/Group1.png'
import Group2 from '../../assets/images/manage_profile/Group2.png'
import Group3 from '../../assets/images/manage_profile/Group3.png'
import Footer from '../Footer'
import '../../assets/css/Profile/ManageProfile.css'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editProfile } from '../../features/profile/profile.slice'
const data = [
    {
        name: "boby",
        img: Group
    },
    {
        name: "user1",
        img: Group1
    },
    {
        name: "user2",
        img: Group2
    },
    {
        name: "Children",
        img: Group3
    }
]
const EditManageProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <div className='manage_profile_main'>
                <div className='manage_profile_sec_main'>
                    <span className='manage_profile_title'>Who's watching?</span>
                    <div className='manage_profile_sec_first'>
                        <div className='m_p_div_main'>
                            {data.map((value, index) => (
                                <div key={index} className='m_p_main_div_first'>
                                    <div className="test">
                                        <div className="icon cursor_pointer">
                                            <EditIcon fontSize='large' onClick={() => {
                                                dispatch(editProfile(value));
                                                navigate(`/profile_edit`)
                                            }} />
                                        </div>
                                        <img src={value.img} width={148} height={148} className='m_p_img' />
                                    </div>
                                    <span className='m_p_span'>
                                        {value.name}
                                    </span>
                                </div>
                            ))
                            }
                            <div className='m_p_div_second'>
                                <img className='m_p_second_img' src={plus} width={45.48} height={43.58} />
                                <span className='m_p_second_span'>Add New</span>
                            </div>
                        </div>
                    </div>
                    <span className='m_p_second_done cursor_pointer' onClick={() => navigate('/manage_profile')}>Done</span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditManageProfile