import React from "react"
import { Slide } from "react-reveal"
import CapsuleImage from "../../Assets/sssAssets/Events/capsule.jpg"
import Heading from "../Elements/Heading"

export default function Events() {

    return <div id="Sevent" className="flex flex-col min-h-screen bg-fixed bg-sss-bg-mobile sm:bg-sss-bg-tablet xl:bg-sss-bg bg-no-repeat w-full justify-center md:p-10">

        <Heading text={"FLAGSHIP EVENTS"} />
        
        <div className="container font-poppins grid grid-col-1 place-items-center text-gray-50 text-justify md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">

            <Slide left duration={1000}>
                <div className="flex p-3 flex-col items-center bg-blur-3xl md:max-w-xl">
                    <img src={CapsuleImage} className="w-full" alt="" />
                    <h1 className="text-2xl font-bold text-white text-center">SKY GAZING THROUGH THE LENSES</h1>
                    <p className="text-base">For centuries, humans across history have seen
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

            <Slide bottom duration={1000}>
                <div className="flex space-y-5  p-3 flex-col items-center  bg-black/30  bg-blur-3xl md:max-w-xl">
                    <img src={CapsuleImage} className="w-full" alt=""/>
                    <h1 className="text-2xl font-bold text-white">MINI PLANETARIUM</h1>
                    <p className="text-base">They said the sky is not the limit, neither are the
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

            <Slide right duration={1000}>
                <div className="flex space-y-5  p-3 flex-col items-center  bg-black/30  bg-blur-3xl md:max-w-xl">
                    <img src={CapsuleImage} className="w-full" alt="" />
                    <h1 className="text-2xl font-bold text-white">INTERACTIVE SESSIONS</h1>
                    <p className="text-base">Seminars and lectures can be quite boring and
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

            <Slide left>
                <div className="flex space-y-5  p-3 flex-col items-center  bg-black/30  bg-blur-3xl md:max-w-xl">
                    <img src={CapsuleImage} className="w-full" alt="" />

                    <h1 className="text-2xl font-bold text-white">STUDENTS SATELLITE PROGRAM</h1>

                    <p className="text-base">Founded by the team behind SPACE-UP CUSAT and
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

            <Slide bottom>
                <div className="flex space-y-5  p-3 flex-col items-center  bg-black/30  bg-blur-3xl md:max-w-xl">
                    <img src={CapsuleImage} className="w-full" alt="" />
                    <h1 className="text-2xl font-bold text-white">DOCUMENTARY</h1>
                    <p className="text-base">When theoretical knowledge is integrated with
                        practicality the understanding and applications
                        of that knowledge evolve on a progressive level.
                        Space is not only for one, it belongs to
                        everyone. With this documentary, we aim to
                        reach everyone it inspires in society. </p>
                </div>
            </Slide>
        </div>
    </div>

}