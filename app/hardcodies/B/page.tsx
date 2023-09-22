"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"


export default function page()
{
    const [isHovered, setIsHovered] = React.useState(false)
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/262f90f11fb738383223c7755c13933e/stream.mp4?Static=true&mediaSourceId=262f90f11fb738383223c7755c13933e&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/262f90f11fb738383223c7755c13933e/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=9d78ad0a2aaf268ee8806a4e6cac7135')
    const [title, setTitle] = React.useState("Belle")
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
                src="http://100.115.158.146:8096/Items/262f90f11fb738383223c7755c13933e/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=9d78ad0a2aaf268ee8806a4e6cac7135"
                width={500}
                height={500}
                alt="Belle"
               
                />
                <Link color="foreground" href="/hardcodies/Belle">

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
                    <h1><strong>Belle</strong></h1>
                    <h2>Ryû to sobakasu no hime</h2>
                    <div className='pfw'><h3><strong>Release</strong>: 2019</h3><h3><strong>RunTime</strong>: 2h 1min</h3><h3><strong>Rating</strong>: T</h3></div>
                    <h2>Suzu, une adolescente vivant avec son père dans une petite ville des montagnes. Dans le monde virtuel appelé "U", Suzu est Belle, une icône musicale.</h2>
                    
                </div>
        </div>
    )
}
