import React from "react";
import "./Team.css";
import Heading from "../Elements/Heading";
import Slide from "react-reveal/Slide"
const teamData = [
  {
    id: 1,
    imgsrc: "https://seds-cusat.github.io/Image-Hoster/2020/aslam.jpg",
    name: "Mohammed Aslam",
    position: "Organizer",
  },
  {
    id: 2,
    imgsrc: "https://seds-cusat.github.io/Image-Hoster/2021/Neha.png",
    name: "R Nehha Mariam",
    position: "Organizer",
  },
];

export default function Team() {
  return (
    <section id="team" className="mb-10">
      <div className="container">
        <Heading text={'TEAM'} />

        <div className="steps">
          {teamData.map((team) => (
          <Slide left>
          <div className="steps-container">
            <div className="img-card">
              <img src={team.imgsrc} alt="" />
            </div>
            <div className="team-body">
              <h1 className="main">{team.name}</h1>
              <div className="line"></div>
              <h2>{team.position}</h2>
            </div>
            
          </div>
          </Slide>
          ))}
        </div>
        {/* <div className="btn-container">
          <Button name="View All" route="/team" />
        </div> */}
      </div>
    </section>
  );
}
