import React from "react";
import "./styles/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://avatars.githubusercontent.com/u/63549047?v=4"
        channel="Ansh Jain"
        verified
        subs="668k"
        noOfVideos={338}
        description="You can find awesome programming stuff here"
      />
      <hr />
      <VideoRow views 
      subs =  "668k"
      description = "You can find awesome programming stuff here"
      timestamp = "1 day ago"
      channel = "Ansh Jain"
      title = "Learn coding in 30 mins"
      image = "https://content.techgig.com/thumb/msid-75430401,width-860,resizemode-4/5-tips-for-students-to-improve-coding-skills-during-college.jpg?58220"
      />
    </div>
  );
}

export default SearchPage;
