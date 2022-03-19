import "./About.css";

const About = () => {
  return (
    <>
      <div className="parent">
        <div className="container" data-aos="fade-up">
          <div className="col-lg-12">
            <h2>About The Event</h2>
            <p>{para[0]}</p>
          </div>
          <div className="row">
            <div className="mission col-lg-6">
              <h2>Our Mission</h2>
              <p>{para[1]}</p>
            </div>
            <div className="col-lg-3">
              <h3>Where</h3>
              <p>CUSAT, Kalamassery</p>
            </div>
            <div className="col-lg-3">
              <h3>When</h3>
              <p>April 9 & 10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const para = [
  "Some of us gaze at the night sky and contemplate the vast universe and seek answers to the questions that one day might become inventive ideas. This is a place for them. A platform where like-minded Astrophiles can gather and discuss multiple possibilities and even the anomaly of space. An event put together with all the opportunities together, aiming for both fun and learning to be presented in an integrated manner. Workshops for learning skills and inventing ideas, seminars to enlighten the mind, interactive sessions to discuss space within the enthusiasts, and a lot more. SPACE UP CUSAT has the potential to provide the attendees a glimpse into what’s happening in the space industry and encourage them to explore, ask questions and learn.",
  "Ideas are mere dreams if not shared. Humans have an urge to dream, share, witness, and believe. In the science community, we celebrated all. We welcome ideas and the mind gave birth to them. Curiosity when shared among each other leads to the answers and questions we never asked. We are committed to building a community and a given space to these ideas and to exchange them within the likes of them.",
];

export default About;
