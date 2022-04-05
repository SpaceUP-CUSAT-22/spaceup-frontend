import "./Home.css";
// import Typewriter from "typewriter-effect";
import Button from "../Elements/Button";
import Pulse from "react-reveal/Pulse";

const Home = () => {

    return (
        <>
            <section id="home">
                <div className="home-container">
                    <h1 className="linear-wipe">
                        SPACE-UP CUSAT 2022
                    </h1>
                    <p>Pre-event on 3rd April 2022, Venue Seminar complex</p>
                    <Pulse forever={true}>
                        <Button name="Register Now" route="/login" />
                    </Pulse>
                </div>
            </section>
        </>
    );

}

export default Home;
