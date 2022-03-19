import "./About.css";

const About = () => {
  return (
    <>
      <div className="parent">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <h2>About The Event</h2>
              <p>{para[0]}</p>
            </div>
            <div className="col-lg-3">
              <h3>Where</h3>
              <p>Downtown Conference Center, New York</p>
            </div>
            <div className="col-lg-3">
              <h3>When</h3>
              <p>Monday to Wednesday 10-12 December</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const para = [
  "IRES SEDS CUSAT is a community of undergraduate students from CUSAT who have come together to make opportunities out of the possibilities that are beyond the perimeters of earth. We aim to take knowledge down the path of imagination. To uphold this vision and idea of ours we come together as a community to administer seminars, forums, and outreach programs to break you f rom the monotonous way of learning. We present the battle of minds both at the national and international level for college and school students and assist them in networking within space industries. Here memories are created with dreams not dependent on the stars falling in the night sky. We bring to you our unconference SPACEUP CUSAT 2022.",
];

export default About;
