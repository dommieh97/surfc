"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [isHovered, setIsHovered] = React.useState(false)
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/66cdd9552301ad76317fb2af9bc86f0a/stream.mp4?Static=true&mediaSourceId=66cdd9552301ad76317fb2af9bc86f0a&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=46606e6bd755948729c7c60947816de1")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/66cdd9552301ad76317fb2af9bc86f0a/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=f42716c613819d64b56e8bda8e7af2bd')
    const [title, setTitle] = React.useState("Judas and The Black Messiah")
   

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
                src="http://100.115.158.146:8096/Items/66cdd9552301ad76317fb2af9bc86f0a/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=f42716c613819d64b56e8bda8e7af2bd"
                width={500}
                height={500}
                alt="Judas-and-The-Black-Messiah"
               
                />
                <Link color="foreground" href="/hardcodies/Judas-and-The-Black-Messiah">

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
                    <h1><strong>Judas and The Black Messiah</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2021</h3><h3><strong>RunTime</strong>: 2h 5m</h3><h3><strong>Rating</strong>: R</h3></div>
                    <h2>You can kill a revolutionary but you can't kill the revolution. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary.</h2>
                    
                </div>
        </div>
    )
}
