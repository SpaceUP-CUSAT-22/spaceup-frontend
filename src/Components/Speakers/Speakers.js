import React, { useState } from "react";
import "./Speakers.css";
import "reactjs-popup/dist/index.css";
import Popup from "./Popup";

export default function Speakers() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="speakers">
      <div className="speakers-head">
        <h2>SPEAKERS</h2>
      </div>

      <div className="speaker-main">
        <div className="sub">
          <div className="speaker-img">
            <img
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className="speaker-content">
            <h2>Lorem, ipsum.</h2>
            <p style={{ margin: "0", padding: "0" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              fugit eveniet, ullam deserunt inventore omnis!
            </p>
            <p style={{ color: "#f36e2d" }} onClick={togglePopup} className="more">
              Read more...
            </p> 
            {isOpen && (
              <Popup
                content={
                  <>
                    <b>Info About speaker</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>

        <div className="sub">
          <div className="speaker-img">
            <img
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className="speaker-content">
            <h2>Lorem, ipsum.</h2>
            <p style={{ margin: "0", padding: "0" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              fugit eveniet, ullam deserunt inventore omnis!
            </p>
            <p style={{ color: "#f36e2d" }} onClick={togglePopup} className="more">
              Read more...
            </p> 
            {isOpen && (
              <Popup
                content={
                  <>
                    <b>Info About speaker</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>


        <div className="sub">
          <div className="speaker-img">
            <img
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className="speaker-content">
            <h2>Lorem, ipsum.</h2>
            <p style={{ margin: "0", padding: "0" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              fugit eveniet, ullam deserunt inventore omnis!
            </p>
            <p style={{ color: "#f36e2d" }} onClick={togglePopup} className="more">
              Read more...
            </p> 
            {isOpen && (
              <Popup
                content={
                  <>
                    <b>Info About speaker</b>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
