import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from '../../config/config'
import ContentModal from '../../ContentModal/ContentModal'
import "./SingleContent.css"

const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
    // console.log(poster)
    return (
        <ContentModal media_type={media_type} id={id} >
        <Badge badgeContent = {vote_average} color = {vote_average > 7 ? "primary" : "secondary"} />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <span className='subTitle'>{media_type==="tv" ? "TV Series" : "Movie"}</span>
            <span className='subTitle'>{date}</span>
        </ContentModal>
    )
}

export default SingleContent
