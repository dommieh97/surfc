"use client"
import ReactPlayer from "react-player"

export default function MaryandTheWitches() {
    return( 
      <div className="video-player">
      <ReactPlayer
        url="http://100.115.158.146:8096/Videos/a348bd471ee5a8ad874021d5c1f85f86/stream.mp4?Static=true&mediaSourceId=a348bd471ee5a8ad874021d5c1f85f86&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=d31e144e62bb0c5c2a69aa31794d63d5"
        controls={true}
        playing={true}
        light={<img src='http://100.115.158.146:8096/Items/a348bd471ee5a8ad874021d5c1f85f86/Images/Backdrop/0?maxWidth=1280&tag=f8dca1268bb312ded5be6881db9104f7&quality=80' alt="Mary and The Witch's Flower" />}
        forceVideo={true}
        height={500}
        width={900}
      />
    </div>
    )
  }


