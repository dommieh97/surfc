"use client"

import ReactPlayer from "react-player"

export default function Belle() {
    return( 
        <div className="video-player">
        <ReactPlayer
          url="http://100.115.158.146:8096/Videos/262f90f11fb738383223c7755c13933e/stream.mp4?Static=true&mediaSourceId=262f90f11fb738383223c7755c13933e&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037"
          controls={true}
          playing={true}
          light={<img src='http://100.115.158.146:8096/Items/262f90f11fb738383223c7755c13933e/Images/Backdrop/0?maxWidth=1280&tag=9bdb027e4247b9102ebcc5caf95e8b38&quality=80' alt='Lu Over The Wall' />}
          forceVideo={true}
          height={500}
          width={900}
        />
      </div>
    )
  }


