import React from "react";
import "./NewsVid.css";
import video from "./Video/video-2.mp4";

function NewsVid() {
  return (
    <div className="vid">
      <video src={video} autoPlay loop muted />
      <h1 className="vid_h1">The latest News awaits you !</h1>
    </div>
  );
}

export default NewsVid;
