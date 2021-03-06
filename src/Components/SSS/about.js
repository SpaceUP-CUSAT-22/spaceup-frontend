import React from "react";
import { Fade } from "react-reveal";
import Heading from "../Elements/Heading";
import './sss.css';

export default function About() {

    return <div id="Sabout" className="relative flex font-poppins min-h-screen texture-bg flex-col w-full items-center bg-contain py-20">
        <div className="container space-y-4 my-auto md:space-y-8 text-white">
            <Fade bottom>
                <Heading text="STUDENTS' SPACE SUMMIT" />
            </Fade>

            <Fade bottom >
                <h1 className="text-sm sm:text-base px-4 sm:px-6 md:px-10 lg:text-lg xl:text-xl md:space-y-12 font-poppins md:leading-10 text-slate-100 text-justify">
                    The official pre-event of SPACE-UP CUSAT that is STUDENTS' SPACE SUMMIT 2022 looks to build momentum in anticipation of our main event. This is marked by providing exposure to participants by enganging them in immensive activities and discussions leading them to learn new things about space. With the steady progress in the field of space, we will always need young and curious minds with their innovative ideas. The minds discuss space in a safe place and put forward their view and opinion on things related to it while being able to do it with the right amount of fun.
                </h1>
            </Fade>

        </div>
        <div className="container space-y-4 my-auto md:space-y-8 text-white pt-20">
            <Fade bottom>
                <Heading text="ABOUT US" />
            </Fade>

            <Fade bottom >
                <h1 className="text-sm sm:text-base px-4 sm:px-6 md:px-10 lg:text-lg xl:text-xl md:space-y-12 font-poppins md:leading-10 text-slate-100 text-justify">
                    IRES SEDS CUSAT is a community of undergraduate students from CUSAT who have come together to make oppurtunities out of the possiblities that are
                    beyond the perimeters of the earth. We aim to take knowledge down the path of imagination. To upload this vision and idea of ours we come together as a community to
                    administer seminars,forums and outreach programs to break you from the monotonous way of learning. We present the battle of minds both at the national and international level for college and school students and assist them
                    in networking within space industries.
                    We bring to you STUDENTS' SPACE SUMMIT the official pre-event of SPACE-UP CUSAT 2022.
                </h1>
            </Fade>

        </div>
    </div>
}