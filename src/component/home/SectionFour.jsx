import React from 'react'
import '../../assets/css/Home.css'
import plus from '../../assets/images/home/plus.png'
import { useTranslation } from 'react-i18next';
const SectionFour = () => {
    const { t } = useTranslation();
    return (
        <div className='section_four_container p-r p-l'>
            <div className='section_four_wrapper'>
                <h2>{t('FREQUENTLY_INQUIRED_QUERIES')}</h2>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('WHAT_DOES_FLICKSTAR_MEAN')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('EXPENSE_FOR_FLICKSTAR')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('WHERE_CAN_I_VIEW')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('HOW_CAN_I_UNSUBSCRIBE')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('FLICKSTAR_STREAMING_LIBRARY')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
                <div className='sec_four_div'>
                    <span className='sec_four_span'>{t('SUITABLE_FOR_CHILDREN')}</span>
                    <img src={plus} width={40} height={40} />
                </div>
            </div>
        </div>
    )
}

export default SectionFour