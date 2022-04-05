import React, { useState } from "react";
import "./Speakers.css";
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import Star from '../Stars/Star';
import Heading from "../Elements/Heading";
import data from "./speaker_data";


export default function Speakers() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="speakers" className="texture-bg">
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
                <Popup className="my-popup" trigger={<button className="more">Read More...</button>} modal>
                  <div>{speaker.body}</div>
                </Popup>
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
