import React from 'react'
import plus from '../../assets/images/manage_profile/plus.png'
import Group from '../../assets/images/manage_profile/Group.png'
import Group1 from '../../assets/images/manage_profile/Group1.png'
import Group2 from '../../assets/images/manage_profile/Group2.png'
import Group3 from '../../assets/images/manage_profile/Group3.png'
import Footer from '../Footer'
import '../../assets/css/Profile/ManageProfile.css'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const data = [
    {
        name: "boby",
        img: Group
    },
    {
        name: "User1",
        img: Group1
    },
    {
        name: "User2",
        img: Group2
    },
    {
        name: "Children",
        img: Group3
    }
]
const ManageProfile = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()
    return (
        <>
            <div className='manage_profile_main'>
                <div className='manage_profile_sec_main'>
                    <span className='manage_profile_title'>{t('WHO_WATCHING')}</span>
                    <div className='manage_profile_sec_first'>
                        <div className='m_p_div_main'>  {data.map((value, index) => (
                            <div key={index} className='m_p_main_div_first'>
                                <img src={value.img} width={148} height={148} className='m_p_img' />
                                <span className='m_p_span'>
                                    {value.name}
                                </span>
                            </div>
                        ))
                        }
                            <div className='m_p_div_second'>
                                <img className='m_p_second_img' src={plus} width={45.48} height={43.58} />
                                <span className='m_p_second_span'>{t('ADD_NEW')}</span>
                            </div>
                        </div>
                    </div>
                    <span className='m_p_span_second  cursor_pointer' onClick={() => navigate('/edit_manage_profile')}>{t('MANAGE_PROFILE_BUTTON')}</span>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ManageProfile