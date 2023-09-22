"use client"
import ReactPlayer from "react-player"

export default function PenguinHighway() {
    return( 
      <div className="video-player">
      <ReactPlayer
    url="http://100.115.158.146:8096/Videos/d1c2f1148201339664850b759da2fc42/stream.mp4?Static=true&mediaSourceId=d1c2f1148201339664850b759da2fc42&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=410b1db593d2f57e913ce3e02f760aa8"
    controls={true}
        playing={true}
        light={<img src='http://100.115.158.146:8096/Items/d1c2f1148201339664850b759da2fc42/Images/Backdrop/0?maxWidth=1280&tag=16e63f979c258e0491f18143c5a7f6db&quality=80' alt="Penguin Highway" />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>
    )
  }
