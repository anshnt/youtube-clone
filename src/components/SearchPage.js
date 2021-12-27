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
      <hr className="searchPage__filter__hr"/>
      <ChannelRow
        image="https://avatars.githubusercontent.com/u/63549047?v=4"
        channel="Ansh Jain"
        verified
        subs="668k"
        noOfVideos={338}
        description="You can find awesome programming stuff here"
      />
      <hr  className="searchPage__filter__hr" />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://media.istockphoto.com/photos/orangutans-picture-id899748046?b=1&k=20&m=899748046&s=170667a&w=0&h=Je6IKffz5nf6PfNlo0EmWunmta_V3o15cFNp9tpUCek="
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://media.istockphoto.com/photos/the-bandraworli-sea-link-mumbai-india-picture-id860528756?k=20&m=860528756&s=612x612&w=0&h=5uau9cXU4jVjW7b9YejARZcRyubZLkMpbIO8HTD93Oc="
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="12 day ago"
        channel="Ansh Jain"
        title="Animal and their loved ones"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU"
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://cdn.cnn.com/cnnnext/dam/assets/181215042152-nasa-juno-01-exlarge-169.jpg"
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://content.techgig.com/thumb/msid-75430401,width-860,resizemode-4/5-tips-for-students-to-improve-coding-skills-during-college.jpg?58220"
        views="24k"
      />
      <VideoRow
        subs="668k"
        description="You can find awesome programming stuff here"
        timestamp="1 day ago"
        channel="Ansh Jain"
        title="Learn coding in 30 mins"
        image="https://photoscissors.com/images/samples/3-before.jpg"
        views="24k"
      />
    </div>
  );
}

export default SearchPage;
