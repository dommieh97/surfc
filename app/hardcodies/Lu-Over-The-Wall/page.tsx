"use client"
import ReactPlayer from "react-player"

export default function LuOverTheWall() {
    return( 
        <div className="video-player">
        <ReactPlayer
          url="http://100.115.158.146:8096/Videos/b717263b3261957007e7e5adfc8338d5/stream.mp4?Static=true&mediaSourceId=b717263b3261957007e7e5adfc8338d5&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=36f83fbcaeb6008063974bb0f313a3bb"
          controls={true}
          playing={true}
          light={<img src='http://100.115.158.146:8096/Items/b717263b3261957007e7e5adfc8338d5/Images/Backdrop/0?maxWidth=1280&tag=36f83fbcaeb6008063974bb0f313a3bb&quality=80' alt='Lu Over The Wall' />}
          forceVideo={true}
          height={500}
          width={900}
        />
      </div>
    )
  }


