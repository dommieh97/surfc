"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [isHovered, setIsHovered] = React.useState(false)
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/2578bc93048e3d85da6ef2c4cb250add/stream.mp4?Static=true&mediaSourceId=2578bc93048e3d85da6ef2c4cb250add&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=2b4ee41b7590b2f6027f270c0c27ee5a")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/2578bc93048e3d85da6ef2c4cb250add/Images/Backdrop/0?maxWidth=1280&tag=aa7818e75760f457c8e6baee9eba591a&quality=80')
    const [title, setTitle] = React.useState("Words Bubble Up Like Soda Pop")
    function handleHover() {
        setIsHovered(true);
      }
    
      function handleLeave() {
        setIsHovered(false);
      }

      function handleChannel() {
        const makePostRequest = async () => {
          const response = await fetch('http://127.0.0.1:5555/channels', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                vidurl,
              imgurl,
              title
            }),
          });
          if (response.status === 200) {
            console.log('Success!');
            
    
          } else {
            console.log('Oh no!');
          }
        };
        makePostRequest();
      };
    return(
        <div className='prt'>
             <Image
                src="http://100.115.158.146:8096/Items/2578bc93048e3d85da6ef2c4cb250add/Images/Primary?fillHeight=680&fillWidth=480&quality=96&tag=fbaa8c370681b5ab6b9dd4445ecfbffd"
                width={500}
                height={500}
                alt="Words Bubble Up Like Soda Pop"
                style={{opacity: isHovered ? "50%" : "100%"}}
                onMouseOver= {handleHover}
                onMouseOut={handleLeave}
                />
                <Link color="foreground" href="/hardcodies/Words-Bubble-Up-Like-Soda-Pop">

                <img 
                    className = "psd"
                    src="/Images/play.png"
                    alt="play button"
                    width={200}
                    height={200}
                />
                     </Link>
                     <img 
                    className = "pas"
                    src="/Images/plus.png"
                    alt="plus sign"
                    width={100}
                    height={100}
                    onClick={handleChannel}
                />
                <div className='prf'>
                    <h1><strong>Words Bubble Up Like Soda Pop</strong></h1>
                    <h2>サイダーのように言葉が湧き上がる</h2>
                    <div className='pfw'><h3><strong>Release</strong>: 2021</h3><h3><strong>RunTime</strong>: 1h 27m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>After meeting one day, a shy boy who expresses himself through haiku and a bubbly but self-conscious girl share a brief, magical summer.</h2>
                    
                </div>
        </div>
    )
}
