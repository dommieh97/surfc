"use client"
import React from "react";
import ChannelCards from "./channelcards"
import {Link} from "@nextui-org/react"

export default function Channel()
{

    const [channels,setChannels] = React.useState([])
    function get() {
        React.useEffect(() => {
          fetch("http://127.0.0.1:5555/channels")
            .then((response) => response.json())
            .then((data) => {
              const channelArray = Object.values(data)
              setChannels(channelArray);
            });
        }, []); 
      }
    console.log(channels)
      get();
    return(
        <>
    <h1 >Channels</h1>
    <div>
        {channels.map((channel) => (
          <ChannelCards key={channel.id} vidurl={channel.vidurl} imgurl={channel.imgurl} setChannels={setChannels} />
        ))}
        <Link href="/hardcodies/my-channel">
         <img 
            className="csc"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
         />
         </Link>
      </div>
      
      </>
)
};