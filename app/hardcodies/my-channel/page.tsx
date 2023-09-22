"use client"

import React from "react"
import ReactPlayer from "react-player"
export default function app(){

const [videoIndex, setVideoIndex] = React.useState(0);

  const handleVideoEnd = () => {
    setVideoIndex((prevVideoIndex) => prevVideoIndex + 1);
  };
 const videos = [
    "http://100.115.158.146:8096/Videos/456676818f82def5b5d45f96fdc47581/stream.mp4?Static=true&mediaSourceId=456676818f82def5b5d45f96fdc47581&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=7ac2e9a243466e4b651931c3801aa149",
    "http://100.115.158.146:8096/Videos/a348bd471ee5a8ad874021d5c1f85f86/stream.mp4?Static=true&mediaSourceId=a348bd471ee5a8ad874021d5c1f85f86&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=d31e144e62bb0c5c2a69aa31794d63d5",
    "http://100.115.158.146:8096/Videos/709bca814fbd3e609c34cadad7b329c3/stream.mp4?Static=true&mediaSourceId=709bca814fbd3e609c34cadad7b329c3&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=aba064babeba038bd47bb84f677df1c5"
  ]
  return (
    <div className="video-player">
    <ReactPlayer
        url={videos[videoIndex]}
        onEnded={handleVideoEnd}
        controls={true}
        playing={true}
        height={500}
        width={900}
      />
    </div>
  );
};

