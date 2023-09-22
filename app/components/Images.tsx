"use client"
import Image from 'next/image'
import React from "react"
import {Link} from "@nextui-org/react"

export default function Images()
{
    const [isHovered, setIsHovered] = React.useState(false)
    function handleHover() {
        setIsHovered(true);
      }
    
      function handleLeave() {
        setIsHovered(false);
      }
    return(
        <>
        <br/>
        <div className='acs' >
        <div className='aca'>
            <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}} />
        
         <Link color="foreground" href="/hardcodies/Words-Bubble-Up-Like-Soda-Pop">
 <Image
      src="http://100.115.158.146:8096/Items/2578bc93048e3d85da6ef2c4cb250add/Images/Primary?fillHeight=680&fillWidth=480&quality=96&tag=fbaa8c370681b5ab6b9dd4445ecfbffd"
      width={200}
      height={200}
      alt="Words Bubble Up Like Soda Pop"
      style={{opacity: isHovered ? "50%" : "100%"}}
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}



    />
     </Link>
     <Link color="foreground" href="/hardcodies/W">
<h3><strong>Words Bubble Up Like Soda Pop</strong></h3>
</Link>
    </div>
    <div className='acb'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
    <Link color="foreground" href="/hardcodies/Judas-and-The-Black-Messiah">
    <Image
      src="http://100.115.158.146:8096/Items/66cdd9552301ad76317fb2af9bc86f0a/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=f42716c613819d64b56e8bda8e7af2bd"
      width={200}
      height={200}
      alt="Judas and The Black Messiah"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
     </Link>
     <Link color="foreground" href="/hardcodies/J">

    <h3><strong>Judas and The Black Messiah</strong></h3>
    </Link>

    </div>
    <div className='acc'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
    <Link color="foreground" href="/hardcodies/Lu-Over-The-Wall">
    <Image
      src="http://100.115.158.146:8096/Items/b717263b3261957007e7e5adfc8338d5/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2cdf11a622e89ef76c6456e3bb9ebdf9"
      width={200}
      height={200}
      alt="Lu Over The Wall"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
    </Link>
    <Link color="foreground" href="/hardcodies/L">
    <h3><strong>Lu Over The Wall</strong></h3>
    </Link>

    </div>
    <div className='acd'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
    <Link color="foreground" href="/hardcodies/Penguin-Highway">

    <Image
      src="http://100.115.158.146:8096/Items/d1c2f1148201339664850b759da2fc42/Images/Primary?fillHeight=455&fillWidth=322&quality=96&tag=53eb2230ae3422ec1108e8295c3184f9"
      width={200}
      height={200}
      alt="Penguin Highway"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
        </Link>
        
        <Link color="foreground" href="/hardcodies/P">
    <h3><strong>Penguin Highway</strong></h3>
    </Link>

    </div>
    <div className='ace'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
    <Link color="foreground" href="/hardcodies/Summer-Wars">

    <Image
      src="http://100.115.158.146:8096/Items/1e4b4559a28b7dc6fca97f9a1ec39b74/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=fad9363373c50bafd9c0f233762d8372"
      width={200}
      height={200}
      alt="Summer Wars"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
        </Link>
        <Link color="foreground" href="/hardcodies/SW">

    <h3><strong>Summer Wars</strong></h3>
    </Link>

    </div>
    <div className='acf'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />

<Link color="foreground" href="/hardcodies/Belle">
        <Image
      src="http://100.115.158.146:8096/Items/262f90f11fb738383223c7755c13933e/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=9d78ad0a2aaf268ee8806a4e6cac7135"
      width={200}
      height={200}
      alt="Belle"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
     </Link>

     <Link color="foreground" href="/hardcodies/B">
<h3><strong>Belle</strong></h3>
</Link>

    </div>
    <div className='acg'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
<Link color="foreground" href="/hardcodies/Night-Is-Short-Girl-Walk-On">

     <Image
      src="http://100.115.158.146:8096/Items/456676818f82def5b5d45f96fdc47581/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=8588b662b8d1afeda4917d09701c6bf1"
      width={200}
      height={200}
      alt="Night Is Short, Walk On Girl"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
     </Link>
     <Link color="foreground" href="/hardcodies/N">

    <h3><strong>Night Is Short, Walk On Girl</strong></h3>
    </Link>

    </div>
    <div className='ach'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
     <Link color="foreground" href="/hardcodies/Suzume">

    <Image
      src="http://100.115.158.146:8096/Items/709bca814fbd3e609c34cadad7b329c3/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=c7c14dbc7ac1956e0bbf8f339a747ab5"
      width={200}
      height={200}
      alt="Suzume"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
         </Link>
         <Link color="foreground" href="/hardcodies/SU">

    <h3><strong>Suzume</strong></h3>
    </Link>

    </div>
    <div className='aci'>
    <img 
            onMouseOver= {handleHover}
            onMouseOut={handleLeave}
            className = "pB"
            src="/Images/play.png"
            alt="play button"
            width={50}
            height={50}
            style={{visibility: isHovered ? "visible" : "hidden"}}
         />
    
         
    <Link color="foreground" href="/hardcodies/Mary-and-The-Witchs-Flower">

    <Image
      src="http://100.115.158.146:8096/Items/a348bd471ee5a8ad874021d5c1f85f86/Images/Primary?fillHeight=483&fillWidth=322&quality=96&tag=2c700aefa90f50a2d8afbc9cb8b30858"
      width={200}
      height={200}
      alt="Mary and The Witch's Flower"
      onMouseOver= {handleHover}
      onMouseOut={handleLeave}
      style={{opacity: isHovered ? "50%" : "100%"}}

    />
         </Link>

         <Link color="foreground" href="/hardcodies/M">

    <h3><strong>Mary and The Witch's Flower</strong></h3>
    </Link>

    </div>
    </div>
    </>
    );
};