import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { Typewriter } from "react-simple-typewriter"
import { Button } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

 function Home()  {

  useGSAP(()=>{
          let tl1=gsap.timeline()
          tl1.from(".line1",{y:80, duration:1,opacity:0} )
          tl1.from(".line2",{y:80, duration:1,opacity:0} )
          tl1.from(".line3",{y:80, duration:1,opacity:0} )
          gsap.from(".righthome img",{x:200, duration:1,opacity:0} )
      })

  return (
    <div id="home">
       <div className="lefthome"> 
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">KOUSHIK DAS</div>
          <div className="line3">
           {/* <TypingEffect \ er moddhe props pass korte pari 
            text={["WEB DEVELOPER","SOFTWARE DEVELOPER","EDITOR"]}\ete onek kichu eksathe lekha jai.... text holo ekta props
            speed={100}
            eraseSpeed={50}\ typing er speed and erase er speed set kora holo koto speed e erase korbe 
            eraseDelay={1000}\ typing er por koto delay por erase korbe 
            typingDelay={500}
            cursor="|"
            
            />
            */}

            <Typewriter
  words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={100}
  deleteSpeed={50}
  delaySpeed={1000}
/>

          </div>
          <button>HIRE ME</button>
        </div>

    </div>
    
    <div className="righthome">
      <img src={man} alt="" />
    </div>

    </div>
  )
}

export default Home