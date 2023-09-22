"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/a348bd471ee5a8ad874021d5c1f85f86/stream.mp4?Static=true&mediaSourceId=a348bd471ee5a8ad874021d5c1f85f86&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=d31e144e62bb0c5c2a69aa31794d63d5")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/a348bd471ee5a8ad874021d5c1f85f86/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2c700aefa90f50a2d8afbc9cb8b30858')
    const [title, setTitle] = React.useState("Mary and The Witch's Flower")
   

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
                src="http://100.115.158.146:8096/Items/a348bd471ee5a8ad874021d5c1f85f86/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2c700aefa90f50a2d8afbc9cb8b30858"
                width={500}
                height={500}
                alt="Suzume"
               
                />
                <Link color="foreground" href="/hardcodies/Mary-and-The-Witchs-Flower">

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
                    <h1><strong>Mary and The Witch's Flower</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2017 </h3><h3><strong>RunTime</strong>:1h 43m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>Mary Smith, a young girl who lives with her great-aunt in the countryside, follows a mysterious cat into the nearby  </h2>
                    
                </div>
        </div>
    )
}
