import React from "react";
import "./Team.css";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";

const teamData = [
  {
    id: 1,
    imgsrc: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Lorem Ipsum",
    position: "Lorem Ipsum",
  },
  {
    id: 2,
    imgsrc: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Lorem Ipsum",
    position: "Lorem Ipsum",
  },
];

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <Heading text={'TEAM'} />
        <div className="steps">
          {teamData.map((team) => (
          <div className="steps-container">
            <div className="img-card">
              <img src={team.imgsrc} alt="" />
            </div>
            <div className="team-body">
              <h1 className="main">{team.name}</h1>
              <div className="line"></div>
              <h2>Designation</h2>
            </div>
          </div>
          ))}
        </div>
        <div className="btn-container">
          <Button name="View All" route="/team" />
        </div>
      </div>
    </section>
  );
}
