import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/Navbar";
import "./Team.css";

export default function Fullteam() {
  return (
    <>
      <Navbar />
      <section id="team">
        <div className="section-head">
          <h2>Team Name</h2>
        </div>

        <div className="container">
          <div className="steps">
            <div className="steps-container">
              <div className="content">
                <div className="img-card">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    }
                    alt=""
                  />
                </div>
                <div style={{ padding: "25px" }}>
                  <h2 className="main">Lorem ipsum dolor</h2>
                  <h2>Designation</h2>
                </div>
              </div>
              <i className="step-line"></i>
              <div className="date"></div>
            </div>
            <div className="steps-container">
              <div className="content">
                <div className="img-card">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    }
                    alt=""
                  />
                </div>
                <div style={{ padding: "25px" }}>
                  <h2 className="main">Lorem ipsum dolor</h2>
                  <h2>Designation</h2>
                </div>
              </div>
              {/* <div className="content">
              <h2>Lorem ipsum dolor</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div> */}
              <i className="step-line"></i>
              <div className="date"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
