"use client"

import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"
import {useRouter} from "next/navigation";


export default function page()
{
    const [vidurl, setVid_Url] = React.useState("http://100.115.158.146:8096/Videos/d1c2f1148201339664850b759da2fc42/stream.mp4?Static=true&mediaSourceId=d1c2f1148201339664850b759da2fc42&deviceId=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExNi4wLjAuMCBTYWZhcmkvNTM3LjM2fDE2OTM5MzQzNTEyMzE1&api_key=7f499c86ee02488ea701a2a63423f037&Tag=410b1db593d2f57e913ce3e02f760aa8")
    const [imgurl, setImg_Url] = React.useState('http://100.115.158.146:8096/Items/d1c2f1148201339664850b759da2fc42/Images/Primary?fillHeight=455&fillWidth=322&quality=96&tag=53eb2230ae3422ec1108e8295c3184f9')
    const [title, setTitle] = React.useState("Penguin Highway")
   
    const router = useRouter();

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
            router.push("/channels");

    
          } else {
            console.log('Oh no!');
          }
        };
        makePostRequest();
      };
    return(
        <div className='prt'>
             <Image
                src="http://100.115.158.146:8096/Items/d1c2f1148201339664850b759da2fc42/Images/Primary?fillHeight=455&fillWidth=322&quality=96&tag=53eb2230ae3422ec1108e8295c3184f9"
                width={500}
                height={500}
                alt="Penguin Highway"
               
                />
                <Link color="foreground" href="/hardcodies/Penguin-Highway">

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
                    <h1><strong>Penguin Highway</strong></h1>
                    <div className='pfw'><h3><strong>Release</strong>: 2018</h3><h3><strong>RunTime</strong>: 1h 57m</h3><h3><strong>Rating</strong>: PG</h3></div>
                    <h2>A fourth-grader investigates the mysterious reason behind the sudden appearance of penguins in his village. PENGUINS!!!!</h2>
                    
                </div>
        </div>
    )
}
