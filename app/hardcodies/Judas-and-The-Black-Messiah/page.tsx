"use client"
import ReactPlayer from "react-player"

export default function JaTBM() {
    return( 
      <div className="video-player">
      <ReactPlayer
        url="http://100.115.158.146:8096/Videos/66cdd9552301ad76317fb2af9bc86f0a/stream.mp4?Static=true&mediaSourceId=66cdd9552301ad76317fb2af9bc86f0a&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=46606e6bd755948729c7c60947816de1"
        controls={true}
        playing={true}
        light={<img src='http://100.115.158.146:8096/Items/66cdd9552301ad76317fb2af9bc86f0a/Images/Backdrop/0?maxWidth=1280&tag=46606e6bd755948729c7c60947816de1&quality=80' alt="Judas and The Black Messiah" />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>
    )
  }


