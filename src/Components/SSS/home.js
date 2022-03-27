import React from "react";
import Fade from 'react-reveal/Fade';

import Logo from "../../Assets/sssAssets/logo.png";

export default function Home() {
    return (
        <div id="Shome" className="flex w-full min-h-screen items-center bg-sss-bg-mobile sm:bg-sss-bg-tablet xl:bg-sss-bg bg-no-repeat bg-cover bg-fixed lg:p-5 flex-col justify-center">
            <img src={Logo} className="w-1/2 h-1/2 md:w-1/4 " />
            <div className="container w-full font-sans text-center bg-blur-xl ">
                <Fade bottom duration={1000}>
                    <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl font-nasa tracking-wider">INDULGE IN THE UNKNOWN AND BEYOND</h1>
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