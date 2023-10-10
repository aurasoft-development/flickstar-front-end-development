import React from 'react'
import '../../assets/css/FlickstarDetails.css'
import { useDispatch } from 'react-redux'
import { changeComponent } from '../../features/movies/movies.details'

const ViewDetails = ({ heading }) => {
    const dispatch = useDispatch()
    return (
        <div className='p-l p-r'>
            <div className="view_details_sec_first">
                <span>{heading}</span>
                <div className="view_div_heading">
                    <span className="view_details_span view_rel_detail" onClick={() => dispatch(changeComponent(true))} >Related</span>
                    <span className='view_carousel_span' onClick={() => dispatch(changeComponent(false))}>Details</span>
                </div>
            </div>
            <div className='view_details_sec view_container '>
                <span className='c-w'>Content advisory</span>
                <span className='c-d'> Violence, foul language, alcohol use, frightening scenes</span>
                <span className='c-w'>Audio languages</span>
                <span className='c-d'>English</span>
                <span className='c-w'>Subtitles</span>
                <span className='c-d'>English [CC]</span>
                <span className='c-w'>Directors</span>
                <span className='c-d'>Neil Marshall</span>
                <span className='c-w'>Producers</span>
                <span className='c-d'>Daniel-Konrad Cooper</span>
                <span className='c-w'>Starring</span>
                <span className='c-d'>Charlotte Kirk, Jonathan Howard, Jamie Bamber</span>
                <span className='c-w'>Studio</span>
                <span className='c-d'>Highland Film Group</span>
                <span className='view_span_flex'><p className='c-d'>By clicking play, you agree to our</p> <p className='c-w'>Terms of Use.</p></span>
                <span className='border_bottom_view c-w'></span>
                <span className='c-w'>Feedback</span>
                <span className='c-d'>Send us feedback</span>
                <span className='c-w'>Support</span>
                <span className='c-d'>Get Help</span>
            </div>
        </div>
    )
}

export default ViewDetails