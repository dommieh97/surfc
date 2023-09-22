"use client"
import ReactPlayer from "react-player"

export default function Wbuls() {

 
    return( 
    
      <div className="video-player">
      <ReactPlayer
        url="http://100.115.158.146:8096/Videos/2578bc93048e3d85da6ef2c4cb250add/stream.mp4?Static=true&mediaSourceId=2578bc93048e3d85da6ef2c4cb250add&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=2b4ee41b7590b2f6027f270c0c27ee5a"
        controls={true}
        playing={false}
        light={<img src='http://100.115.158.146:8096/Items/2578bc93048e3d85da6ef2c4cb250add/Images/Backdrop/0?maxWidth=1280&tag=aa7818e75760f457c8e6baee9eba591a&quality=80' alt='Words Bubble Up Like Soda Pop' />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>

    
    )
  }
