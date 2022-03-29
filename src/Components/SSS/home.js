import React from "react";
import './sss.css';
import Fade from 'react-reveal/Fade';
// import Button from "../Elements/Button";
import Pulse from "react-reveal/Pulse";

import Logo from "../../Assets/sssAssets/logo.png";

export default function Home() {
    return (
        <div id="Shome" className="min-h-screen flex flex-col justify-center items-center text-center bg-sh-mobile sm:bg-sh-tablet md:bg-sh bg-no-repeat bg-fixed bg-cover pt-10">
            <img src={Logo} className="w-48 py-4 mx-auto pt-5" width={1622} height={1622} alt="SpaceUP logo" />
            <h1 className="py-3 text-white font-bold text-4xl md:text-5xl lg:text-6xl font-nasa tracking-wider linear-wipe">INDULGE IN THE UNKNOWN AND BEYOND</h1>
            <Fade bottom duration={1000} delay={1000}>
                <p className="text-gray-50 text-xl md:text-xl pb-2">The Official Pre Event of Spaceup CUSAT</p>
            </Fade>
            <Fade bottom duration={1000} delay={1000}>
                <p className="text-gray-50 font-medium text-2xl">April 3rd 2022 at Seminar Complex, CUSAT</p>
            </Fade>
            <Pulse forever={true}>
                <a className="home-register-btn" href="https://api.spaceupcusat.org/login">Register Now</a>
            </Pulse>
        </div>
    )

}