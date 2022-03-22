import React from "react"
import {Fade} from "react-reveal"

export default function About(){



    return <div id="about" className="flex font-sans min-h-screen flex-col bg-cover bg-bottom bg-no-repeat text-gray-50 w-full justify-end  text-left items-center">

    <div className="flex px-8 py-12 lg: rotate-180">

    
    <div className="space-y-8 my-auto max-w-7xl md:space-y-24">
    <Fade bottom>
    <h1 className="text-3xl font-bold lg:text-5xl">About Us</h1>

    </Fade>

    <Fade bottom >
    <h1 className="text-2xl text-left  lg:text-4xl space-y-12 break-words" style={{lineHeight:"1.5"}}>
    IRES SEDS CUSAT is a community of undergraduate students from CUSAT who have come together to make oppurtunities out of the possiblities that are 
    beyond the perimeters of the earth.We aim to take knowledge down the path of imagination.To upload this vision and idea of ours we come together as a community to
    administer seminars,forums and outreach programs to break you from the monotonous way of learning .We Present the battle of minds both at the national and international lvel for college and school students and assist them 
    in networking within space industries.
    We Bring to you STUDENT'S SPACE SUMMIT-official pre-event of SPACEUP-CUSAT-2022. 
    </h1>
    </Fade>

    </div>

    

    </div>



    
</div>
}