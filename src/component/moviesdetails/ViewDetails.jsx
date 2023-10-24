import React from 'react'
import '../../assets/css/FlickstarDetails.css'
import { useDispatch } from 'react-redux'
import { changeComponent } from '../../features/movies/movies.details'
import { useTranslation } from 'react-i18next'

const ViewDetails = ({ heading }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    return (
        <div className='hello p-l p-r'>
            <div className="view_details_sec_first">
                <span>{heading}</span>
                <div className="view_div_heading">
                    <span className="view_details_span view_rel_detail" onClick={() => dispatch(changeComponent(true))} >{t('RELATED')}</span>
                    <span className='view_carousel_span' onClick={() => dispatch(changeComponent(false))}>{t('DETAILS')}</span>
                </div>
            </div>
            <div className='view_details_sec view_container '>
                <span className='c-w'>{t('CONTENT_ADVISORY')}</span>
                <span className='c-d'> {t('Violence')}</span>
                <span className='c-w'>{t('AUDIO_LANGUAGE')}</span>
                <span className='c-d'>{t('ENGLISH')}</span>
                <span className='c-w'>{t('SUBTITLES')}</span>
                <span className='c-d'>{t('ENGLISH_CC')}</span>
                <span className='c-w'>{t('DICRECTORS')}</span>
                <span className='c-d'>{t('NEIL_MARSHALL')}</span>
                <span className='c-w'>{t('PROUDUCES')}</span>
                <span className='c-d'>{t('DANIEL_KONRAD_COOPER')}</span>
                <span className='c-w'>{t('STARRING')}</span>
                <span className='c-d'>{t('CHARLOTTE_KRIRK')}</span>
                <span className='c-w'>{t('STUDIO')}</span>
                <span className='c-d'>{t('HIGHLAND_FLIM_GROUP')}</span>
                <span className='view_span_flex'><p className='c-d'>{t('BY_CLICKING_PLAY')}</p> <p className='c-w'>{t('TERMS_OF_USE')}</p></span>
                <span className='border_bottom_view c-w'></span>
                <span className='c-w'>{t('FEEDBACK')}</span>
                <span className='c-d'>{t('SEND_US_FEEDBACK')}</span>
                <span className='c-w'>{t('SUPPORT')}</span>
                <span className='c-d'>{t('GET_HELP')}</span>
            </div>
        </div>
    )
}

export default ViewDetails