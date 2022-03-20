import React from "react"
import { Carousel } from "react-bootstrap"
import { Slide } from "react-reveal"


export default function Events(){

    return <div id="event" className="flex flex-col items-center grid-rows-5  justify-center items-center space-y-8 p-10 min-h-screen bg-cover bg-bottom bg-no-repeat text-gray-50 w-screen text-center bg-[url('/home/vishnu/Desktop/spaceup-sss/sss/public/assets/Events/event-background.jpg')] lg:flex-row justify-evenly">

        <Slide left duration={1000}>
        <div className="flex rounded-xl space-y-5 w-5/6 p-5 flex-col items-center bg-white/30 bg-blur-3xl lg:w-1/6">
        
        <img src="./assets/Events/capsule.jpg" className="rounded-xl"/>
      
        
        <h1 className="text-3xl font-bold text-white">SKY GAZING THROUGH THE LENSES</h1>
       
       <p className="text-2xl">For centuries, humans across history have seen
       the same sky and looked at the patterns of stars
       like beautiful lanterns hanging in the sky. But,
       since the discovery of telescopes, nothing comes
       close to diving deep into the magnificence of
       stars, planets and moons. On this day, gazing at
       the wonders of the night sky is made more fun
       by watching it together. Everyone sees the world
       differently and what’s better than finding out
       how others view the same sky.</p>
   


        </div>
        </Slide>


        <Slide left  duration={1000}>
        <div className="flex rounded-xl space-y-5 w-5/6 p-5 flex-col items-center bg-white/30 bg-blur-3xl lg:w-1/6">
          
        <img src="./assets/Events/capsule.jpg" className="rounded-xl"/>
      
        
        <h1 className="text-3xl font-bold text-white">MINI PLANETARIUM</h1>
       
       <p className="text-2xl">They said the sky is not the limit, neither are the
       stars. Let’s take a tour of all the celestial bodies
       you ever wondered about. The mini-planetarium is
       an adventure to the space-up-above us. It’s your
       voyage to the celestial bodies with information to
       enlighten your mind. Escape into the own world of
       planets, stars, galaxies that we are creating as a
       team for you to apprehend the lives and sight of
       astronauts through your own eyes.</p>
   


        </div>
    </Slide>

    <Slide left  duration={1000}>
        <div className="flex rounded-xl space-y-5 w-5/6 p-5 flex-col items-center bg-white/30 bg-blur-3xl lg:w-1/6">
        
        <img src="./assets/Events/capsule.jpg" className="rounded-xl"/>
   
      
        
        <h1 className="text-3xl font-bold text-white">INTERACTIVE SESSIONS</h1>
       
       <p className="text-2xl">Seminars and lectures can be quite boring and
       the whole idea of this event is to exchange
       ideas. Therefore, we have planned to discuss
       topics,
       discover.
       ideas,
       wonder
       about
       opportunities with your fellow participants and
       host. Information that comes up when we
       interact with another always is a better way of
       understanding.</p>
   


        </div>

    </Slide>

    <Slide right>
        <div className="flex rounded-xl space-y-5 w-5/6 p-5 flex-col items-center bg-white/30 bg-blur-3xl lg:w-1/6">
        
   
        <img src="./assets/Events/capsule.jpg" className="rounded-xl"/>
       
       
       
      
        
        <h1 className="text-3xl font-bold text-white">STUDENTS SATELLITE PROGRAM</h1>
       
       <p className="text-2xl">Founded by the team behind SPACE-UP CUSAT and
       supported by several university clubs such as SEDS
       and IRES CUSAT, the Student Program (SSP) aims to
       create a community that can design, fabricates, and
       tests
       space
       technology
       subsystems
       for
       consumption both domestically and internationally.</p>
   


        </div>

        </Slide>


    <Slide right>
        <div className="flex rounded-xl space-y-5 w-5/6 p-5 flex-col items-center bg-white/30 bg-blur-3xl lg:w-1/6">
       
        <img src="./assets/Events/capsule.jpg" className="rounded-xl"/>
      
        
        <h1 className="text-3xl font-bold text-white">DOCUMENTARY</h1>
       
       <p className="text-2xl">When theoretical knowledge is integrated with
       practicality the understanding and applications
       of that knowledge evolve on a progressive level.
       Space is not only for one, it belongs to
       everyone. With this documentary, we aim to
       reach everyone it inspires in society. </p>
   
        </div>
        </Slide>
      

    
    
    </div>

}