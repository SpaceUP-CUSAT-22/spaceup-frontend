import React from "react";
import { Fade } from "react-reveal";
import Heading from "../Elements/Heading";
import Star from "../Stars/Star";
import './sss.css';

export default function About() {

    return <div id="Sabout" className="relative flex font-poppins py-20 h-full radial-bg flex-col w-full items-center bg-contain">
        <Star />
        <div className="md:container space-y-4 my-auto md:space-y-8 text-white">
            <Fade bottom>
                <Heading text="ABOUT US" />
            </Fade>

            <Fade bottom >
                <h1 className="text-base sm:text-lg px-4 sm:px-6 md:px-10 lg:text-xl md:space-y-12 font-poppins md:leading-10 text-slate-100">
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