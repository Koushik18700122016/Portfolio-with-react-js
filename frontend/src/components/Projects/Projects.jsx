import React from 'react'
import Card from '../Card/Card'
import va from "../../assets/va.png"
import ef from "../../assets/ef.png"
import cb from "../../assets/cb.png"
//import tti from "../../assets/tti.png"
//import br from "../../assets/br.png"
//import ise from "../../assets/ise.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import{ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
function Projects ()  {

  useGSAP(()=>{
           
            gsap.from("#para",{y:100, duration:1, opacity:0,stagger:1, scrollTrigger:{
              trigger:"#para",
              scroll:"body",
              scrub:2,
              markers:false,
              start:"top 80%",
              end:"top 30%"
            }} )

            gsap.from("#slider",{y:100, duration:1, opacity:0,stagger:1, scrollTrigger:{
              trigger:"#para",
              scroll:"body",
              scrub:2,
              markers:false,
              start:"top 80%",
              end:"top 30%"
            }} )
          })
  return (
    <div id="projects">
        <h1 id="para">FRESHER</h1>
        <div className="slider">
            <Card title="VIRTUAL ASSISTANT " image={va}/>
            <Card title="AI POWERED E COMMERCE WEBSITE " image={ef}/>
      
        <Card title="AI CHATBOT " image={cb} />
        {/*
            <Card title="AI TEXT TO IMAGE " image={tti}/>
            <Card title="AI BACKGROUND REMOVER " image={br}/>
            <Card title="IMAGE SEARCH ENGINE " image={ise}/> 
            */}

        </div>
    </div>
  )
}

export default Projects