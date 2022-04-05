import Heading from "../Elements/Heading";
import "./Events.css";
import { useState } from "react";

const Events = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <!-- ======= Schedule Section ======= --> */}
      <section id="events" className="section-with-bg">
        <div className="container">
          <Heading text={"EVENT SCHEDULE"} />

          <div className="tab-content row justify-content-center">
            {/* <!-- Schedule Day 1 --> */}

            <ul className="nav nav-tabs events-nav" role="tablist">
              <li
                className="nav-item"
                onClick={() => {
                  setShow(true);
                }}
              >
                <a
                  className={(show) ? "nav-link active" : "nav-link"}
                  href="#day-1"
                  role="tab"
                  data-bs-toggle="tab"
                >
                  Day 1
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  setShow(false);
                }}
              >
                <a
                  className={(show) ? "nav-link" : "nav-link active"}
                  href="#day-2"
                  role="tab"
                  data-bs-toggle="tab"
                >
                  Day 2
                </a>
              </li>
            </ul>

            <div
              role="tabpanel"
              className="col-lg-9 tab-pane fade show active"
              style={{ display: show ? "" : "none" }}
            >
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>7:30AM – 8:30AM</time>
                </div>
                <div className="col-md-10">
                  <h4>Registration</h4>
                  {/* <p>Seminar Complex outside</p> */}
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>8:30AM - 10:00AM</time>
                </div>
                <div className="col-md-10">
                  <h4>INAUGURATION</h4>
                  {/* <p>THEATRE HALL</p> */}
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM– 11:30AM</time>
                </div>
                <div className="col-md-10">
                  <h4>M.C Dathan</h4>
                  <p>Space Talk</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>12:00PM– 12:50PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Dr. Sarita Vig Dr. Anand Narayanan</h4>
                  <p>T-20</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>01:00 PM– 2:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Lunch</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>2:00PM– 3:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Dr .Sreejalekshmi K.G</h4>
                  <p>Space Talk</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>3:10PM – 3:40PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Raghav Sharma Arjun cosmos</h4>
                  <p>T-20</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>3:40PM- 4:10PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Tea and snacks</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>4:30PM – 5:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Documentary</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>5:00PM – 7:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Debate among participants</h4>
                </div>
              </div>
            </div>

            <div
              role="tabpanel"
              className="col-lg-9 tab-pane fade show active"
              style={{ display: show ? "none" : "" }}
            >
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>8:00AM – 9:00AM</time>
                </div>
                <div className="col-md-10">
                  <h4>Registration</h4>
                  {/* <p>Seminar Complex outside</p> */}
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>9:00AM - 10:00AM</time>
                </div>
                <div className="col-md-10">
                  <h4>Sanoj V</h4>
                  <p>Space Talk</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:30AM – 11:30AM</time>
                </div>
                <div className="col-md-10">
                  <h4>Dr. Nandakumar K</h4>
                  <p>Space Talk</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>11:40AM – 12:50 PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Kiran Mohan</h4>
                  <p>Space Talk</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>1:00PM – 2:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Lunch</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>2:00PM – 2:30PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Briefing about treasure hunt</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>2:30PM – 5:30PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Treasure hunt</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>6:00PM- 8:00PM</time>
                </div>
                <div className="col-md-10">
                  <h4>KSP</h4>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>8:00PM- 8:30PM</time>
                </div>
                <div className="col-md-10">
                  <h4>Closing ceremony</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Events;
