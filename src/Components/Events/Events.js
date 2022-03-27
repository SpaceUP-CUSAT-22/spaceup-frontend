import Heading from "../Elements/Heading";
import "./Events.css";

const Events = () => {
  return (
    <>
      {/* <!-- ======= Schedule Section ======= --> */}
      <section id="events" className="section-with-bg">
        <div className="container">
          <Heading text={"EVENT SCHEDULE"}/>

          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" href="#day-1" role="tab">Day 1</a>
            </li>
          </ul>

          <h3 className="sub-heading">Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
            necessitatibus voluptatem quis labore perspiciatis quia.</h3>

          <div className="tab-content row justify-content-center">

            {/* <!-- Schdule Day 1 --> */}
            <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">

              <div className="row schedule-item">
                <div className="col-md-2"><time>09:30 AM</time></div>
                <div className="col-md-10">
                  <h4>Registration</h4>
                  <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2"><time>10:00 AM</time></div>
                <div className="col-md-10">
                  <h4>Keynote <span>Brenden Legros</span></h4>
                  <p>Facere provident incidunt quos voluptas.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2"><time>11:00 AM</time></div>
                <div className="col-md-10">
                  <h4>Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span></h4>
                  <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2"><time>12:00 AM</time></div>
                <div className="col-md-10">
                  <h4>Explicabo et rerum quis et ut ea. <span>Cole Emmerich</span></h4>
                  <p>Veniam accusantium laborum nihil eos eaque accusantium aspernatur.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2"><time>02:00 PM</time></div>
                <div className="col-md-10">
                  <h4>Qui non qui vel amet culpa sequi. <span>Jack Christiansen</span></h4>
                  <p>Nam ex distinctio voluptatem doloremque suscipit iusto.</p>
                </div>
              </div>

              <div className="row schedule-item">
                <div className="col-md-2"><time>04:00 PM</time></div>
                <div className="col-md-10">
                  <h4>Quo qui praesentium nesciunt <span>Willow Trantow</span></h4>
                  <p>Voluptatem et alias dolorum est aut sit enim neque veritatis.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}
export default Events;