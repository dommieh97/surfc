"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/456676818f82def5b5d45f96fdc47581/stream.mp4?Static=true&mediaSourceId=456676818f82def5b5d45f96fdc47581&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=7ac2e9a243466e4b651931c3801aa149")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/456676818f82def5b5d45f96fdc47581/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=8588b662b8d1afeda4917d09701c6bf1')
    const [title, setTitle] = React.useState("Night Is Short Girl Walk On")
   

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
                src="http://100.115.158.146:8096/Items/456676818f82def5b5d45f96fdc47581/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=8588b662b8d1afeda4917d09701c6bf1"
                width={500}
                height={500}
                alt="Night Is Short Girl Walk On"
               
                />
                <Link color="foreground" href="/hardcodies/Night-Is-Short-Girl-Walk-On">

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
                    <h1><strong>Night Is Short Girl Walk On</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2017 </h3><h3><strong>RunTime</strong>:1h 32m</h3><h3><strong>Rating</strong>: PG-13</h3></div>
                    <h2>As a group of university students go out for a night on the town, a sophomore known only as "The Girl with Black Hair" </h2>
                    
                </div>
        </div>
    )
}
