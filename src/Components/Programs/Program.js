import Heading from "../Elements/Heading";
import Slide from "react-reveal/Slide";
import './Program.css';

const About = () => {
    return (
        <>
            <div className="program" id="programs">
                <div className="container">
                    <div className="row">
                        <Heading text={"WHAT IS SPACEUP?"} />
                        <Slide up>
                            <div className="content texture-bg mb-10">
                                <p className="text-justify md:text-left">{para[0]}</p>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Heading text={"HOW IT WORKS"} />
                        <Slide up>
                            <div className="content texture-bg mb-10">
                                <p className="text-justify md:text-left">{para[1]}</p>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Heading text={"SUB PROGRAMS"} />
                        <Slide up>
                            <div className="content texture-bg mb-10 sub-programs">
                                <ul>
                                    <li>
                                        <h4>{title[0]}</h4>
                                        <p className="text-justify md:text-left">{para[2]}</p>
                                    </li>
                                    <li>
                                        <h4>{title[1]}</h4>
                                        <p className="text-justify md:text-left">{para[3]}</p>
                                    </li>
                                    <li>
                                        <h4>{title[2]}</h4>
                                        <p className="text-justify md:text-left">{para[4]}</p>
                                    </li>
                                    <li>
                                        <h4>{title[3]}</h4>
                                        <p className="text-justify md:text-left">{para[5]}</p>
                                    </li>
                                </ul>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    );
};

const para = [
    "SpaceUp is a worldwide leading space unconference concept. Everyone who attends SpaceUp is encouraged to give a talk, moderate a panel, or start a discussion. The participants are free to talk on any space-related topic from any discipline like astrophysics, cosmology, engineering, biochemistry, human physiology, psychology, business, law, policy, arts, culture, fiction, etc. It is a great way to meet new people and exchange new ideas.",
    "There are no spectators at SpaceUp, only participants. All attendees are expected to give a demo, present a talk, or participate in a panel or roundtable. It's not as scary as it might sound, though. Sessions at SpaceUp are conversations, just like every conversation you've had (or wanted to have) at any other conference. The only difference is that the sessions are planned on the spot, which means we're sure to be talking about topics we find interesting.",
    "Let your imagination run wild while you learn about building a spacecraft! Through a fun and interactive game, build spacecrafts, fly them, and help the Kerbals fulfill their ultimate mission of conquering space! ",
    "Engage in 20 minute interactive sessions led by distinguished speakers like ___ to see your curiosity peak!",
    "Take in, in depth, the topics you newly learned from our knowledgeable speakers with a debate having a panel of dedicated moderators. Stir up the wildest conversations!",
    "Explore more! Explore more about outer space with a treasure hunt! Be sure about all trivia, you just might find yourself the winner!"
];

const title = [
    "Kerbal Space Program",
    "Speakers",
    "Debate",
    "Treasure hunt"
];

export default About;


