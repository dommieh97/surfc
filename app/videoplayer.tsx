"use client"
import ReactPlayer from "react-player"

export default function VideoPlayer(){

return(
  <div className="video-player">
    <ReactPlayer 
    url="http://100.115.158.146:8096/Videos/5921d5f3668651cf7e3a65fb521b13e8/stream.mp4?Static=true&mediaSourceId=5921d5f3668651cf7e3a65fb521b13e8&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=2b4ee41b7590b2f6027f270c0c27ee5a"
    playing={true}
    controls={true}/>
  </div>
)
};
