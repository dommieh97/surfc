"use client"
import ReactPlayer from "react-player"

export default function Suzume() {
    return( 
      <div className="video-player">
      <ReactPlayer
  url="http://100.115.158.146:8096/Videos/456676818f82def5b5d45f96fdc47581/stream.mp4?Static=true&mediaSourceId=456676818f82def5b5d45f96fdc47581&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=7ac2e9a243466e4b651931c3801aa149"
  controls={true}
        playing={true}
        light={<img src='http://100.115.158.146:8096/Items/456676818f82def5b5d45f96fdc47581/Images/Backdrop/0?maxWidth=1280&tag=34f31cb389237025ced45f737d251244&quality=80' alt="Penguin Highway" />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>
    )
  }

