import React, { useState } from "react";
import "./Speakers.css";
import "reactjs-popup/dist/index.css";
import Popup from "./Popup";
import Star from '../Stars/Star';
import Heading from "../Elements/Heading";

const data = [
  {
    id: 1,
    imgsrc: "https://randomuser.me/api/portraits/men/35.jpg",
    name: "Lorem Ipsum",
    position: "Lorem Ipsum",
    breif: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugit eveniet, ullam deserunt inventore omnis!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    imgsrc: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Lorem Ipsum",
    position: "Lorem Ipsum",
    breif: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugit eveniet, ullam deserunt inventore omnis!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    imgsrc: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Lorem Ipsum",
    position: "Lorem Ipsum",
    breif: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta fugit eveniet, ullam deserunt inventore omnis!",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. officia deserunt mollit anim id est laborum.",
  },
];

export default function Speakers() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="speakers">
      <Star />
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
                <p className="speaker-body">
                  {speaker.breif}
                </p>
                <div onClick={togglePopup} className="more">
                  {"Read More..."}
                </div>
                {isOpen && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
