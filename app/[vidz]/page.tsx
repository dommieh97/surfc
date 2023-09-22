import ReactPlayer from "react-player"

export default function Page({ params }: { params: { vidz: "Suzume" } }) {
    return( 
    <div>
    <div>Suzume{params.vidz}</div>
    <ReactPlayer 
    url="http://100.115.158.146:8096/Videos/709bca814fbd3e609c34cadad7b329c3/stream.mp4?Static=true&mediaSourceId=709bca814fbd3e609c34cadad7b329c3&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=e81bf6ceba924d922dce233f1628e136"
    playing={true}
    controls={true}/>
    </div>
    )
  }