"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/b717263b3261957007e7e5adfc8338d5/stream.mp4?Static=true&mediaSourceId=b717263b3261957007e7e5adfc8338d5&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=36f83fbcaeb6008063974bb0f313a3bb")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/b717263b3261957007e7e5adfc8338d5/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2cdf11a622e89ef76c6456e3bb9ebdf9')
    const [title, setTitle] = React.useState("Lu Over The Wall")
   

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
                src="http://100.115.158.146:8096/Items/b717263b3261957007e7e5adfc8338d5/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2cdf11a622e89ef76c6456e3bb9ebdf9"
                width={500}
                height={500}
                alt="Lu Over The Wall"
               
                />
                <Link color="foreground" href="/hardcodies/Lu-Over-The-Wall">

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
                    <h1><strong>Lu Over the Wall</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2017</h3><h3><strong>RunTime</strong>: 1h 52m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>In a small fishing village, a gloomy middle school student named Kai meets a mermaid named Lu.</h2>
                    
                </div>
        </div>
    )
}
