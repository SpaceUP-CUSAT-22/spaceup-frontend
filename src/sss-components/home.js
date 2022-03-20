import React from "react";
import Fade from 'react-reveal/Fade';

export default function Home(){


    return <div id="home" className="flex w-screen p-5 h-screen bg-cover bg-no-repeat bg-bottom items-center">
    


    <div className="w-full font-sans  px-5 space-y-5 lg:text-center md:px-1 bg-blur-xl">

    <Fade bottom duration={1000}>
    <h1 className="text-white  font-bold text-7xl md:text-7xl lg:text-8xl">Students Space Summit 2022</h1>
    </Fade>

    <Fade bottom duration={1000} delay={1000}>
    <p className="text-gray-50 font-medium text-2xl lg:text-4xl ">The Official Pre Event of Spaceup CUSAT</p>
    </Fade>


    <Fade bottom duration={1000} delay={1000}>
    <p className="text-gray-50 font-bold text-2xl lg:text-4xl">April 3rd 2022</p>
    </Fade>

    </div>

    </div>


}