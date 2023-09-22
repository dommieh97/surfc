"use client"
import ReactPlayer from "react-player"

export default function Suzume() {
    return( 
        <div className="video-player">
        <ReactPlayer
      url="http://100.115.158.146:8096/Videos/709bca814fbd3e609c34cadad7b329c3/stream.mp4?Static=true&mediaSourceId=709bca814fbd3e609c34cadad7b329c3&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=aba064babeba038bd47bb84f677df1c5"
      controls={true}
          playing={true}
          light={<img src='http://100.115.158.146:8096/Items/709bca814fbd3e609c34cadad7b329c3/Images/Backdrop/0?maxWidth=1280&tag=aba064babeba038bd47bb84f677df1c5&quality=80' alt="Penguin Highway" />}
          forceVideo={true}
          height={500}
          width={900}
        />
      </div>
    )
  }
