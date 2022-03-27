import React from "react";
import Fade from 'react-reveal/Fade';

import Logo from "../../Assets/sssAssets/logo.png";

export default function Home() {
    return (
        <div id="Shome" className="flex w-full min-h-screen items-center bg-sss-bg lg:p-5 flex-col justify-center">
            <img src={Logo} className="w-1/2 h-1/2 md:w-1/4 " />
            <div className="w-full font-sans  px-3 space-y-5 text-center md:px-1 bg-blur-xl">
                <Fade bottom duration={1000}>
                    <h1 className="text-white  font-bold text-5xl md:text-7xl lg:text-8xl font-nasa tracking-wider">STUDENTS SPACE SUMMIT 2022</h1>
                </Fade>
                <Fade bottom duration={1000} delay={1000}>
                    <p className="text-gray-50 text-xl md:text-xl">The Official Pre Event of Spaceup CUSAT</p>
                </Fade>
                <Fade bottom duration={1000} delay={1000}>
                    <p className="text-gray-50 font-medium text-2xl">April 3rd 2022</p>
                </Fade>
            </div>
        </div>
    )

}