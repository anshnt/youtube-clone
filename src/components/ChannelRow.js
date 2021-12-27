import React from "react";
import './styles/ChannelRow.css'
import Avatar from "@mui/material/Avatar";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
          <h4>{channel} {verified && <CheckCircleOutlinedIcon />}</h4>
     <p>{subs} subscribers • {noOfVideos} videos</p>
     <p>{description}</p>
      </div>
  </div>;
}

export default ChannelRow;
