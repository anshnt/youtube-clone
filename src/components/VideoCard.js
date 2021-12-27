import React from 'react';
import Avatar from '@mui/material/Avatar';
import './styles/VideoCard.css'
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className='videaCard'>
          <img src={image} alt="" className='videaCard__thumbnail'/>  
          <div className="videaCard__info">
            <Avatar className="video__avatar" alt={channel} src={channelImage} />
            <div className="video__text">
              <h4>
                {title}
              </h4>
              <p>{channel}</p>
              <p>
                {views} ● {timestamp}
              </p>
            </div>
          </div>
        </div>
    )
}

export default VideoCard
