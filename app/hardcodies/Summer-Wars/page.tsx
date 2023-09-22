"use client"
import ReactPlayer from "react-player"

export default function SummerWars() {
    return( 
      <div className="video-player">
      <ReactPlayer
    url="http://100.115.158.146:8096/Videos/1e4b4559a28b7dc6fca97f9a1ec39b74/stream.mp4?Static=true&mediaSourceId=1e4b4559a28b7dc6fca97f9a1ec39b74&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=911181aa06c54eaf49c31291010c5a65"
    controls={true}
        playing={true}
        light={<img src='http://100.115.158.146:8096/Items/1e4b4559a28b7dc6fca97f9a1ec39b74/Images/Backdrop/0?maxWidth=1280&tag=911181aa06c54eaf49c31291010c5a65&quality=80' alt="Penguin Highway" />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>
    )
  }


