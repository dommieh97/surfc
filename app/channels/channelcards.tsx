"use client"
import {useRouter} from "next/navigation";

export default function ChannelCards({vidurl, imgurl, key, setChannels})
{
  const router = useRouter();

    function handleDelete(){

        fetch(`http://localhost:5555/channels/4`,{method: "DELETE"}).then((response)=>{
              if (response.ok){
                setChannels((data)=>
                data.filter((da)=>da.id !==key))
                router.push("/channels");

              }})
      }
    

    return(<>
    <div className="pfw">
    <button className="sdc" onClick={handleDelete}><strong>X</strong></button>
    <img
    src={imgurl}/>
    </div>
    </>);
};