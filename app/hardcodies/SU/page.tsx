"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/709bca814fbd3e609c34cadad7b329c3/stream.mp4?Static=true&mediaSourceId=709bca814fbd3e609c34cadad7b329c3&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=aba064babeba038bd47bb84f677df1c5")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/709bca814fbd3e609c34cadad7b329c3/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=c7c14dbc7ac1956e0bbf8f339a747ab5')
    const [title, setTitle] = React.useState("Suzume")
   

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
                src="http://100.115.158.146:8096/Items/709bca814fbd3e609c34cadad7b329c3/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=c7c14dbc7ac1956e0bbf8f339a747ab5"
                width={500}
                height={500}
                alt="Suzume"
               
                />
                <Link color="foreground" href="/hardcodies/Suzume">

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
                    <h1><strong>Suzume</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2022 </h3><h3><strong>RunTime</strong>:2h 1m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>Suzume, 17, lost her mother as a little girl. On her way to school she meets, a mysterious young man.  </h2>
                    
                </div>
        </div>
    )
}
