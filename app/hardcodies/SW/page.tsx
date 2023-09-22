"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/1e4b4559a28b7dc6fca97f9a1ec39b74/stream.mp4?Static=true&mediaSourceId=1e4b4559a28b7dc6fca97f9a1ec39b74&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=911181aa06c54eaf49c31291010c5a65")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/1e4b4559a28b7dc6fca97f9a1ec39b74/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=fad9363373c50bafd9c0f233762d8372')
    const [title, setTitle] = React.useState("Summer Wars")
   

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
                src="http://100.115.158.146:8096/Items/1e4b4559a28b7dc6fca97f9a1ec39b74/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=fad9363373c50bafd9c0f233762d8372"
                width={500}
                height={500}
                alt="Summer Wars"
               
                />
                <Link color="foreground" href="/hardcodies/Summer-Wars">

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
                    <h1><strong>Summer Wars</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2009 </h3><h3><strong>RunTime</strong>: 1h 54m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.</h2>
                    
                </div>
        </div>
    )
}
