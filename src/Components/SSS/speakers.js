import React, { useState } from "react";
import "../Speakers/Speakers.css";
import "reactjs-popup/dist/index.css";
import Popup from "../Speakers/Popup";
import Heading from "../Elements/Heading";
import speaker1 from "../../Assets/speakers/1.jpg";
import speaker2 from "../../Assets/speakers/2.jpg";
import speaker3 from "../../Assets/speakers/3.jpg";

const data = [
    {
        id: 1,
        imgsrc: speaker1,
        name: "Murugesan Vijayarajan",
        position: "Rocket Scientist(retd), VSCC",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        imgsrc: speaker2,
        name: "Biju Prasad",
        position: "Scientist/ Engineer ‘G’ head, Electromechanical Actuation systems, VSSC",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. officia deserunt mollit anim id est laborum.",
    },
    {
        id: 3,
        imgsrc: speaker3,
        name: "Dr. Shaji N",
        position: "Professor, Physics dept, CUSAT",
        body: "Prof. N. Shaji has retired as a Principal from T. M. Jacob Memorial Government College, Ernakulam. He has more than 20 years of experience in the field of research and teaching and has done his PhD in Physics. He is a prolific science writer. He is associated with the energy division of IRTC.",
    },
];

export default function Speakers() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section id="Sspeakers" className="bg-sh-mobile sm:bg-sh-tablet md:bg-sh bg-no-repeat bg-fixed bg-cover">
            <div className="container">
                <Heading text={"SPEAKERS"} />
                <div className="speaker-main">
                    {data.map((speaker) => (
                        <div className="sub" id={speaker.id}>
                            <div className="speaker-img">
                                <img
                                    src={speaker.imgsrc}
                                    alt=""
                                />
                            </div>
                            <div className="speaker-content">
                                <h2 className="speaker-name">{speaker.name}</h2>
                                <h4 className="speaker-position">{speaker.position}</h4>
                                {/* <div onClick={togglePopup} className="more">
                                    {"Read More..."}
                                </div> */}
                                {/* {isOpen && (
                                    <Popup
                                        content={
                                            <>
                                                <b>Info About speaker</b>
                                                <p>
                                                    {speaker.body}
                                                </p>
                                            </>
                                        }
                                        handleClose={togglePopup}
                                    />
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
