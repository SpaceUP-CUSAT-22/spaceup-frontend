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
                    <p>9 April 2022 to 10 April 2022, at Seminar Complex, CUSAT</p>
                    <Pulse forever={true}>
                        <Button name="Register Now" route="https://rzp.io/l/spaceupcusat22" />
                    </Pulse>
                </div>
            </section>
        </>
    );

}

export default Home;
