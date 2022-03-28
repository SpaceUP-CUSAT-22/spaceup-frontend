import React from "react"
import Heading from "../Elements/Heading";
import './sschedule.css';

const data = [
  {
    time: "07:30 - 08:50 AM",
    title: "ARRIVAL & REGISTRATION",
  },
  {
    time: "09:00 - 10:30 AM",
    title: "INAUGURAL CEREMONY",
  },
  {
    time: "10:30 - 10:45 AM",
    title: "COFFEE & SNACK BREAK",
  },
  {
    time: "10:45 - 11:00 AM",
    title: "GENERAL INSTRUCTIONS",
  },
  {
    time: "11:00 - 12:00 PM",
    title: "KEYNOTE SPEECH - 1",
  },
  {
    time: "12:00 - 01:00 PM",
    title: "LUNCH BREAK",
  },
  {
    time: "01:10 - 02:10 PM",
    title: "KEYNOTE SPEECH - 2",
  },
  {
    time: "02:10 - 04:10 PM",
    title: "DOCUMENTARY / INTERACTIVE SESSIONS",
  },
  {
    time: "04:10 - 05:00 PM",
    title: "RELAXATION, INSTRUCTIONS FOR NEXT SESSIONS",
  },
  {
    time: "05:00 - 06:00 PM",
    title: "TELESCOPE MAKING WORKSHOP",
  },
  {
    time: "06:10 - 06:55 PM",
    title: "PM KEYNOTE SESSION - 3 (SHAJI SIR)",
  },
  {
    time: "07:00 - 07:15 PM",
    title: "SKY WATCHING - 1",
  },
  {
    time: "07:15 - 09:00 PM",
    title: "SKY WATCHING - 2 + SKY MAPPING",
  },
];

export default function Schedule() {
  return (
    <>
      {/* <!-- ======= Schedule Section ======= --> */}
      <section id="Sschedule" className="texture-bg">
        <div className="container">
          <Heading text={"SCHEDULE"} />

          <div className="tab-content row justify-content-center">

            <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

              {data.map((event) => (

                <div className="row schedule-item">
                  <div className="col-md-3"><time>{event.time}</time></div>
                  <div className="col-md-9 border-l">
                    <h4>{event.title}</h4>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

    </>);

}